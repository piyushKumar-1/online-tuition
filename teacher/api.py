from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from .serializers import BecomeTeacherSerializer
from users.models import CustomUser
from student.serializers import UploadSerializer, SubjectSerializer, CoursesEnrolledSerializer
from student.models import SubjectEnrolled, UploadedMaterial, CoursesEnrolled, Courses, SubCourses
from courses.serializers import SubjectListSerializer
from courses.models import Subjects





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
		forthis = SubjectEnrolled.objects.get(enrollment_id=request.data['CourseEnrolledId'], enrolled_sub=request.data['subjectID'])
		data = {}
		data['student_enrolled_subject'] = forthis
		data['uploaded_material'] = request.data['file']
		print(data)
		UploadedMaterial.objects.create(**data)
		return Response({'success':'Created Successfully'})


class DashboardAPI(generics.GenericAPIView):
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

class CoursesIndiAPI(generics.GenericAPIView):
	serializer_class = UploadSerializer
	permission_classes = [
        permissions.IsAuthenticated,
    ]
	

	def get(self, request, enrCourseId):
		subs = SubjectEnrolled.objects.all().filter(enrollment_id=enrCourseId)
		li = []
		for i in subs:
			try:
				li.append(UploadedMaterial.objects.get(student_enrolled_subject=i))
			except:
				pass
		serializers =  self.get_serializer(data=li, many=True)
		serializers.is_valid()
		serializer2 = SubjectListSerializer(data=[Subjects.objects.get(id=i.enrolled_sub_id) for i in subs], many=True)
		serializer2.is_valid()
		for i in serializer2.data:
			print(i['id'])
			k = UploadedMaterial.objects.all().filter(student_enrolled_subject = SubjectEnrolled.objects.get(enrolled_sub_id=i['id'], enrollment_id=enrCourseId).id)
			if(len(k)>0):
				serializers1 = self.get_serializer(data=k, many=True)
				serializers1.is_valid()
				i['uploads'] = serializers1.data
			else:
				i['uploads'] = None
		return Response(serializer2.data)

	def post(self, request):
		print(request.data)


