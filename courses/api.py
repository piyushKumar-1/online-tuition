from rest_framework import generics
from rest_framework.response import Response
from .models import Courses, SubCourses, Subjects
from .serializers import CourseListSerializer,SubCourseListSerializer, SubjectListSerializer


class CoursesAPI(generics.ListCreateAPIView):
	serializer_class = CourseListSerializer
	queryset = Courses.objects.filter(active_field=True).order_by('course_name')



class SubCoursesAPI(generics.ListCreateAPIView):
	serializer_class = SubCourseListSerializer
	queryset = SubCourses.objects.filter(active_field=True).order_by('sub_course_name')


class SubjectAPI(generics.ListCreateAPIView):
	serializer_class = SubjectListSerializer
	queryset = Subjects.objects.filter(active_field=True).order_by('subject_name')