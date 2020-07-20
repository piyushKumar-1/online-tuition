from rest_framework import generics
from rest_framework.response import Response
from .models import Enquiry
from .serializers import EnquirySerializer, EnquiryCreateSerializer


class CreateEnquiryView(generics.CreateAPIView):
    serializer_class = EnquiryCreateSerializer

    def post(self, request):
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	serializer.save()
    	return Response({'success':'Created Successfully'})



class GetEnquieryView(generics.GenericAPIView):
	serializer_class = EnquirySerializer

	def get_client_ip(request):
	    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
	    if x_forwarded_for:
	        ip = x_forwarded_for.split(',')[0]
	    else:
	        ip = request.META.get('REMOTE_ADDR')
	    return ip

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