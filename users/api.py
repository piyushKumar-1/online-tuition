from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterationSerializer, LoginSerializer, ResetPasswordSerializerEmailRequest, SetNewPasswordSerializer

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import smart_bytes, force_str, DjangoUnicodeDecodeError, smart_str
from .models import CustomUser

class RegisterationAPI(generics.GenericAPIView):
    serializer_class = RegisterationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            'user':UserSerializer(user,
            context=self.get_serializer_context()).data,
            'token':AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    _, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user



class ResetPasswordAPI(generics.GenericAPIView):

     serializer_class = ResetPasswordSerializerEmailRequest

     def post(self, request):
         data = {'data': request.data, 'request': request}
         serializer = self.get_serializer(data = request.data)
         if not serializer.is_valid():
             return Response({'error': 'Email Not Registered Try again.....'},status=status.HTTP_401_UNAUTHORIZED)
         return Response({'success':"We have sent you a link to reset the password "},status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):

    def get(self, request, uidb64, token):
        try:
            id=smart_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error':'Token seems invalid, try again with a new one'}, status=status.HTTP_401_UNAUTHORIZED)
            return Response({'success':True, 'message':'Valid Credentials', 'uidb64':uidb64, 'token': token}, status=status.HTTP_200_OK)
        except DjangoUnicodeDecodeError as identifier:
            return Response({'error': 'Token seems invalid, try again with a new one'},
                            status=status.HTTP_401_UNAUTHORIZED)


class SetNewPasswordAPI(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': 'Password Reset Success', 'message': 'Password reset success'}, status=status.HTTP_200_OK)
