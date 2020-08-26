import os
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse, Http404
# Create your views here.


def download(request, file):
	print(file)
	file_path = os.path.join(settings.BASE_DIR, file)
	if os.path.exists(file_path):
		with open(file_path, 'rb') as fh:
			response = HttpResponse(fh.read(), content_type="")
			response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
			return response
	raise Http404