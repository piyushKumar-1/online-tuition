from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from rest_framework.exceptions import AuthenticationFailed
from django.utils.encoding import smart_bytes, force_str, DjangoUnicodeDecodeError, smart_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from .models import CustomUser, Education, Occupation

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name','last_name', 'email')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('course', 'year', 'department')


class OccupationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Occupation
        fields = ('occupation',)


class RegisterationSerializer(serializers.ModelSerializer):
    education = EducationSerializer()
    occupation = OccupationSerializer()
    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'is_parent', 'education', 'occupation')
        extra_kwargs = {'password': {'write_only':True}}


    def create(self, validated_data):
        print(validated_data)
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        occupation = validated_data.pop('occupation')
        education = validated_data.pop('education')
        try:
            user = CustomUser.objects.create_user(email, password, **validated_data)
        except:
            raise serializers.ValidationError({'error': "User Already Exist"})

        if validated_data['is_parent']:
            print("occupation")
            Occupation.objects.create(user=user, **occupation)
        else:
            print("education")
            Education.objects.create(user=user, **education)

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")






class ResetPasswordSerializerEmailRequest(serializers.Serializer):
    email = serializers.CharField()

    class Meta:
        fields = ['email']

    def validate(self, data):
        print(data)
        email = data['email']
        print(self.context['request'], CustomUser.objects.filter(email=email).exists())
        if CustomUser.objects.filter(email=email).exists():
            print("yes")
            user = CustomUser.objects.get(email=email)
            uid64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            absurl = 'http://127.0.0.1:8000/reset/confirmation/'+uid64+"/"+token
            email_body = 'Hello, '+user.first_name+'\n Use link below to change the password\n'+absurl
            data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Reset your password'}
            Util.sendMail(data)
            return data
        print("kkk")
        raise serializers.ValidationError("User Doesn't Exist")


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)