from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from knox.models import AuthToken
from rest_framework.response import Response
from django.forms.models import model_to_dict
from django.core import serializers
from users.serializers import UserSerializer, CustomUser
from courses.serializers import SubjectListSerializer
from .serializers import EventsSerializer, CoursesEnrolledSerializer, UploadSerializer
from .models import CoursesEnrolled, Events, Courses, SubCourses, Subjects, SubjectEnrolled, UploadedMaterial

from re import sub



class CoursesEnrolledViewAPI(generics.GenericAPIView):
    serializer_class = CoursesEnrolledSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = CoursesEnrolled.objects.all()

    def post(self, request, *args, **kwargs):
        department = SubCourses.objects.get(id=int(request.data['CourseId'])+1)
        subIds = [int(i)+1 for i in request.data['subId']]
        if(len(subIds)==0): 
            subIds = None 
        course = department.course
        try:
            k = CoursesEnrolled.objects.create(student=self.request.user, course_enrolled=course, department=department, subject_ids=subIds)
            for i in subIds:
                SubjectEnrolled.objects.create(enrollment=k, enrolled_sub=Subjects.objects.get(id=i))
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)   
        return Response({'success':'Created Successfully'})
        
    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = CoursesEnrolled.objects.all().filter(student=self.request.user), many=True)
        serializer.is_valid()
        for data in serializer.data:
            data['course_enrolled'] = Courses.objects.get(id=data['course_enrolled']).course_name
            data['department'] = SubCourses.objects.get(id=data['department']).sub_course_name
        return Response(serializer.data)




class MyCoursesAPI(generics.GenericAPIView):
    serializer_class = UploadSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def post(self, request):
        subs = SubjectEnrolled.objects.all().filter(enrollment_id=request.data['EnrCourseId'])
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
        print(serializer2.data, serializers.data)
        for i in serializer2.data:
            k = UploadedMaterial.objects.all().filter(student_enrolled_subject_id=i['id'])
            if(len(k)>0):
                serializers1 = self.get_serializer(data=k, many=True)
                serializers1.is_valid()
                i['uploads'] = serializers1
            else:
                i['uploads'] = None

        return Response(serializer2.data)





class CoursesEnrolledIndividualAPI(generics.GenericAPIView):
    serializer_class = CoursesEnrolledSerializer


    def delete(self, request, pk):
        print(pk)
        instance = CoursesEnrolled.objects.get(id=pk)
        print(instance)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class EventsAPI(generics.GenericAPIView):
    serializer_class = EventsSerializer
    queryset = Events.objects.all()


    def get(self, request):
        serializer = self.get_serializer(data = Events.objects.all(), many=True)
        serializer.is_valid()
        for data in serializer.data:
            teacher = CustomUser.objects.get(id=data['teacher'])
            data['course'] = Courses.objects.get(id=data['course']).course_name
            data['department'] = SubCourses.objects.get(id=data['department']).sub_course_name
            try:
                data['subject'] = Subjects.objects.get(id=data['subject']).subject_name
            except:
                pass
            data['teacher'] = {'id':teacher.id, 'name': teacher.first_name+" "+teacher.last_name, 'email': teacher.email}
        return Response(serializer.data)



    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success':'Created Successfully'})