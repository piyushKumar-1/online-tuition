from rest_framework import serializers
from .models import Events, CoursesEnrolled, SubjectEnrolled, UploadedMaterial




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
