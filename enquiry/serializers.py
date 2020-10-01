from rest_framework import serializers
from .models import Enquiry, ContactUsMessage, TeacherMessage




class TeacherMessageSerializer(serializers.ModelSerializer):
	class Meta:
		model = TeacherMessage
		fields = ('message', 'reply', 'seen')

class ContactUsSerializer(serializers.ModelSerializer):
	class Meta:
		model = ContactUsMessage
		fields = "__all__"
	def create(self, data):
		print(data)
		ContactUsMessage.objects.create(**data)
		return ContactUsMessage

class EnquirySerializer(serializers.Serializer):
    class Meta:
    	model = Enquiry
    	fields = ('id', 'time', 'day', 'subject', 'service')



class EnquiryCreateSerializer(serializers.ModelSerializer):
	class Meta:
		model = Enquiry
		fields = "__all__"
	def create(self, data):
		print(data)
		Enquiry.objects.create(**data)
		return Enquiry