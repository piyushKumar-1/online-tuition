from rest_framework import serializers
from .models import Events, CoursesEnrolled, SubjectEnrolled, UploadedMaterial, ChatModel




class EventsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Events
		fields = "__all__"


class CoursesEnrolledSerializer(serializers.ModelSerializer):
	class Meta:
		model = CoursesEnrolled
		fields = "__all__"


class SubjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = SubjectEnrolled
		fields = "__all__"


class UploadSerializer(serializers.ModelSerializer):
	class Meta:
		model = UploadedMaterial
		fields = "__all__"



class ChatSerializer(serializers.ModelSerializer):
	class Meta:
		model = ChatModel
		fields = ("msg", "msg_time", "msg_side", "approval")
