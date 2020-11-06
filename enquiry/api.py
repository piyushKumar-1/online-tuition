from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.parsers import FormParser,MultiPartParser
from .models import Enquiry, TeacherMessage
from teacher.models import BecomeTeacher
from users.models import CustomUser
from .serializers import EnquirySerializer, EnquiryCreateSerializer, ContactUsSerializer, TeacherMessageSerializer

def get_client_ip(request):
	    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
	    if x_forwarded_for:
	        ip = x_forwarded_for.split(',')[0]
	    else:
	        ip = request.META.get('REMOTE_ADDR')
	    return ip




class CreateContactUsMessage(generics.GenericAPIView):
	serializer_class = ContactUsSerializer
	@csrf_exempt
	def post(self, request, *args, **kwargs):
		data = request.data
		data['client_ip'] = get_client_ip(request)
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response({'success':'Created Successfully'})




class CreateEnquiryView(generics.CreateAPIView):
    serializer_class = EnquiryCreateSerializer
    parser_classes = (MultiPartParser,FormParser,)
    @csrf_exempt
    def post(self, request, *args, **kwargs):
    	data = request.data
    	data['client_ip'] = get_client_ip(request)
    	print(data)
    	serializer = self.get_serializer(data=data)
    	serializer.is_valid(raise_exception=True)
    	serializer.save()
    	return Response({'success':'Created Successfully'})



class GetEnquieryView(generics.GenericAPIView):
	serializer_class = EnquirySerializer
	def get(self, request):
		try:
			client_IP = get_client_ip(request)
			enquiryFlag = Enquiry.objects.get(client_ip=client_IP)
			return Response({
				"enquiry": EnquirySerializer(enquiyFlag, context = self.get_serializer_context()).data
				})
		except:
			return Response({
				'enquiry':None
				})



class PostAdminSeen(generics.GenericAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]
	def post(self, request):
		data = TeacherMessage.objects.filter(teacher=BecomeTeacher.objects.get(id=request.user.teacher_id),seen=False)
		for i in data:
			i.seen = True
			i.save()
		return Response({'seen':True})

class PostTeacherMessage(generics.GenericAPIView):
	serializer_class = TeacherMessageSerializer
	permission_classes = [
		permissions.IsAuthenticated
	]
	def post(self, request):
		try:
			TeacherMessage.objects.create(teacher=BecomeTeacher.objects.get(id=request.user.teacher_id), seen=True, message=request.data['message'])
		except:
			pass

		return Response({
				'sent':"Sent"
			})
	def get(self, request):
		try:
			data = TeacherMessage.objects.filter(teacher=BecomeTeacher.objects.get(id=request.user.teacher_id))
			serializer = self.get_serializer(data = data, many=True)
			serializer.is_valid()
			res = {}
			res["ml"] = serializer.data
			res['new'] = len(TeacherMessage.objects.filter(teacher=BecomeTeacher.objects.get(id=request.user.teacher_id), seen=False))


			return Response(res)
		except:
			return Response({'fail':'fail'})
