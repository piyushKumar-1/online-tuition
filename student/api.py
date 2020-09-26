from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from django.http import Http404
from rest_framework.parsers import FormParser,MultiPartParser
from knox.models import AuthToken
from rest_framework.response import Response
from django.forms.models import model_to_dict
from rest_framework.views import APIView
from django.core import serializers
from users.serializers import UserSerializer, CustomUser
from courses.serializers import SubjectListSerializer
from .serializers import EventsSerializer, FeedbackSerializer, CoursesEnrolledSerializer, UploadSerializer, ChatSerializer, StudentUploadSerializer
from .models import CoursesEnrolled, Events, Courses, Feedback, SubCourses, Subjects, SubjectEnrolled, UploadedMaterial, ChatModel, StudentUpload
from teacher.models import BecomeTeacher
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
            try:
                k = CoursesEnrolled.objects.get(student=self.request.user, department=department)
            except:
                k = CoursesEnrolled.objects.create(student=self.request.user, course_enrolled=course, department=department, subject_ids=subIds)
            
            if(subIds==None): 
                if not len(Subjects.objects.filter(sub_course_id=int(request.data['CourseId'])+1)):
                    try:
                        SubjectEnrolled.objects.get(enrollment=k, enrolled_sub=Subjects.objects.get(id=104))
                    except:
                        SubjectEnrolled.objects.create(enrollment=k, enrolled_sub=Subjects.objects.get(id=104))
    
            for i in subIds:
                try:
                    SubjectEnrolled.objects.get(enrollment=k, enrolled_sub=Subjects.objects.get(id=i))
                except:
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

    def get_object(self, pk):
        try:
            return CoursesEnrolled.objects.get(id=pk)
        except:
            raise Http404 

    def post(self, request):
        enrCourseId = request.data['EnrCourseId']
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
    def delete(self, request, enr_id):
        k = self.get_object(enr_id)
        print(k)
        k.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

        



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
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get(self, request):
        print(Events.objects.all().filter(student = self.request.user))
        ret = self.get_serializer(data=Events.objects.all().filter(student = self.request.user), many=True)
        ret.is_valid()
        print(ret.data)

        return Response(ret.data)


    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'success':'Created Successfully'})


class StudentChatAPI(generics.GenericAPIView):
    serializer_class = ChatSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, teacher_id):
        serializer = self.get_serializer(data=ChatModel.objects.all().filter(teacher_id=teacher_id, student_id=self.request.user), many=True)
        serializer.is_valid()
        dataL = []
        for data in serializer.data:
            print(data)
            if data["msg_side"]:
                dataL.append(data)
            elif not data["msg_side"] and not data["approval"]:
                continue
            else:
                dataL.append(data)
        print(dataL)
        return Response(reversed(dataL))
    def post(self, request):

        print(request.data)
        ChatModel.objects.create(msg=request.data['msg'], student=self.request.user, teacher=BecomeTeacher.objects.get(id=request.data['teacher_id']))
        serializer = self.get_serializer(data=ChatModel.objects.filter(teacher_id=request.data['teacher_id'], student=self.request.user), many=True)
        serializer.is_valid()
        dataL = []
        for data in serializer.data:
            print(data)
            if data["msg_side"]:
                dataL.append(data)
            elif not data["msg_side"] and not data["approval"]:
                continue
            else:
                dataL.append(data)
        print(dataL)
        return Response(reversed(dataL))


class StudentFilesAPI(generics.GenericAPIView):
    serializer_class = StudentUploadSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    parser_classes = (MultiPartParser, FormParser,)
    
    def post(self, request):
        print(request.data)
        request.data['student'] = request.user.id
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = self.get_serializer(data=StudentUpload.objects.filter(student=request.user), many=True)
        data.is_valid()
        return Response(data.data)
    def get(self, request):
        data = self.get_serializer(data=StudentUpload.objects.filter(student=request.user), many=True)
        data.is_valid()
        return Response(data.data)



class FeedbackAPI(generics.GenericAPIView):
    serializer_class = FeedbackSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid()
        serializer.save()
        serializer = self.get_serializer(data=Feedback.objects.filter(course_enrolled=request.data['course_enrolled']), many=True)
        serializer.is_valid()
        return Response(reversed(serializer.data))
    def get(self, request, c_id):
        serializer = self.get_serializer(data=Feedback.objects.filter(course_enrolled=c_id), many=True)
        serializer.is_valid()
        return Response(reversed(serializer.data))
