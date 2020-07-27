from django.db import models




class BecomeTeacher(models.Model):
	name = models.CharField(max_length=50)
	email = models.EmailField()
	ph_no = models.IntegerField()
	department = models.IntegerField()
	sub0 = models.IntegerField()
	sub1 = models.IntegerField()
	sub2 = models.IntegerField()
	sub3 = models.IntegerField()
	experience = models.CharField(max_length=100)
	qualification = models.CharField(max_length=150)
