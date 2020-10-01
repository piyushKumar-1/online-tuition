from django.db import models
from teacher.models import BecomeTeacher







class TeacherMessage(models.Model):
	message = models.CharField(max_length=200)
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.CASCADE)
	reply = models.CharField(max_length=300, blank=True, null=True)
	seen = models.BooleanField(default=False)
	def __str__(self):
		return "Message: "+self.message+", from Teacher: "+self.teacher.name
	


class Enquiry(models.Model):
	client_ip = models.GenericIPAddressField()
	name = models.CharField(max_length=100)
	email = models.EmailField(max_length=254)
	ph_no = models.IntegerField()
	country = models.CharField(max_length=100)
	std = models.IntegerField()
	department = models.CharField(max_length=50)
	year = models.IntegerField()
	service = models.CharField(max_length=50)
	subject = models.CharField(max_length=50, null=True)
	other_sub = models.CharField(max_length=100, null=True)
	sub_code = models.CharField(null=True, max_length=50)
	project = models.CharField(max_length=150, null=True)
	other = models.CharField(max_length=150, null=True)
	instruction = models.CharField(max_length=50, null=True, blank=True)
	time = models.TimeField()
	day = models.DateField(auto_now=False, auto_now_add=False)
	file = models.FileField(null=True, blank=True)

	def __str__(self):
		return str(self.client_ip)+" id:"+str(self.pk)


class ContactUsMessage(models.Model):
	client_ip = models.GenericIPAddressField()
	name = models.CharField(max_length=100)
	subject = models.CharField(max_length=200)
	email = models.EmailField(max_length=254)
	message = models.CharField(max_length=600)

	def __str__(self):
		return str(self.email)
