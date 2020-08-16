from rest_framework import serializers
from .models import Events, CoursesEnrolled




class EventsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Events
		fields = "__all__"


class CoursesEnrolledSerializer(serializers.ModelSerializer):
	class Meta:
		model = CoursesEnrolled
		fields = "__all__"
