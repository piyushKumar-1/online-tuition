from rest_framework import generics
from rest_framework.response import Response
from .models import Courses, SubCourses
from .serializers import CourseListSerializer,SubCourseListSerializer


class CoursesAPI(generics.ListCreateAPIView):
	serializer_class = CourseListSerializer
	queryset = Courses.objects.all()



class SubCoursesAPI(generics.ListCreateAPIView):
	serializer_class = SubCourseListSerializer
	queryset = SubCourses.objects.all()
