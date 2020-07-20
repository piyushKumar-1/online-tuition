from rest_framework import serializers
from .models import Enquiry




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


