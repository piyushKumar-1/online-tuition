from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from .serializers import BecomeTeacherSerializer
from users.models import CustomUser
from student.serializers import UploadSerializer, SubjectSerializer, CoursesEnrolledSerializer
from student.models import SubjectEnrolled, UploadedMaterial, CoursesEnrolled, Courses, SubCourses






class CreateTeacherView(generics.CreateAPIView):
    serializer_class = BecomeTeacherSerializer
    parser_classes = (MultiPartParser,FormParser,)

    def post(self, request, *args, **kwargs):
    	print(request.data)
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	serializer.save()
    	return Response({'success':'Created Successfully'})



class UploadSubjectMaterial(generics.GenericAPIView):
	serializer_class = UploadSerializer
	parser_classes = (MultiPartParser, FormParser,)

	def post(self, request):
		print(request.data)
		serializer = self.get_serializer(data = request.data)
		serializer.is_valid()
		serializer.save()

class DashboardSerializer(generics.GenericAPIView):
	serializer_class = CoursesEnrolledSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]
	def get(self, request):
		serializer1 = self.get_serializer(data=CoursesEnrolled.objects.all().filter(teacher=CustomUser.objects.get(email=request.user).teacher), many=True)
		serializer1.is_valid()
		for data in serializer1.data:
			student = CustomUser.objects.get(id=data['student'])
			data['course_enrolled'] = Courses.objects.get(id=data['course_enrolled']).course_name
			data['department'] = SubCourses.objects.get(id=data['department']).sub_course_name
			data['student_name'] = student.first_name+" "+student.last_name
			data['student_email'] = student.email
		return Response(serializer1.data)

class CoursesIndiSerializer(generics.GenericAPIView):
	pass