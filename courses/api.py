from rest_framework import generics
from rest_framework.response import Response
from .models import Courses, SubCourses, Subjects
from .serializers import CourseListSerializer,SubCourseListSerializer, SubjectListSerializer


class CoursesAPI(generics.ListCreateAPIView):
	serializer_class = CourseListSerializer
	queryset = Courses.objects.all()



class SubCoursesAPI(generics.ListCreateAPIView):
	serializer_class = SubCourseListSerializer
	queryset = SubCourses.objects.all()


class SubjectAPI(generics.ListCreateAPIView):
	serializer_class = SubjectListSerializer
	queryset = Subjects.objects.all()