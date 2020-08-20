from rest_framework import serializers
from .models import BecomeTeacher




class BecomeTeacherSerializer(serializers.ModelSerializer):
	class Meta:
		model = BecomeTeacher
		fields = "__all__"
	def create(self, data):
		print(data)
		BecomeTeacher.objects.create(**data)
		return BecomeTeacher

