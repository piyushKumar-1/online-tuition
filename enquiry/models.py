from django.db import models





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
	subject = models.CharField(max_length=50)
	sub_code = models.IntegerField()
	instruction = models.CharField(max_length=50)
	time = models.TimeField()
	day = models.DateField(auto_now=False, auto_now_add=False)
	file = models.FileField()

	def __str__(self):
		return str(self.client_ip)+str(self.pk)