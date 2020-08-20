from rest_framework import generics
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from .serializers import BecomeTeacherSerializer





class CreateTeacherView(generics.CreateAPIView):
    serializer_class = BecomeTeacherSerializer
    parser_classes = (MultiPartParser,FormParser,)

    def post(self, request, *args, **kwargs):
    	print(request.data)
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	serializer.save()
    	return Response({'success':'Created Successfully'})