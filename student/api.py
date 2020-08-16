from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from knox.models import AuthToken
from rest_framework.response import Response
from django.forms.models import model_to_dict
from users.serializers import UserSerializer, CustomUser
from .serializers import EventsSerializer, CoursesEnrolledSerializer
from .models import CoursesEnrolled, Events, Courses, SubCourses, Subjects

from re import sub



class CoursesEnrolledViewAPI(generics.GenericAPIView):
    serializer_class = CoursesEnrolledSerializer
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = CoursesEnrolled.objects.all()

    def post(self, request, *args, **kwargs):
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	serializer.save()
    	return Response({'success':'Created Successfully'})
    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = CoursesEnrolled.objects.all().filter(student=self.request.user), many=True)
        serializer.is_valid()
        for data in serializer.data:
            data['course_enrolled'] = Courses.objects.get(id=data['course_enrolled']).course_name
            data['department'] = SubCourses.objects.get(id=data['department']).sub_course_name
            data['subject'] = Subjects.objects.get(id=data['subject']).subject_name
        return Response(serializer.data)





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