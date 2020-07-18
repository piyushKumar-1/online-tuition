from rest_framework import serializers
from .models import Courses, SubCourses



class CourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ('id','course_name')


class SubCourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCourses
        fields = ('id', 'sub_course_name', 'course_id')