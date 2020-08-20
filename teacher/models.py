from django.db import models

class BecomeTeacher(models.Model):
	name = models.CharField(max_length=50)
	email = models.EmailField()
	ph_no = models.IntegerField()
	department = models.IntegerField()
	sub0 = models.IntegerField(null=True, blank=True, default=None)
	sub1 = models.IntegerField(null=True, blank=True, default=None)
	sub2 = models.IntegerField(null=True, blank=True, default=None)
	sub3 = models.IntegerField(null=True, blank=True, default=None)
	experience = models.CharField(max_length=100)
	qualification = models.CharField(max_length=150)
	resume = models.FileField(upload_to="teacher/resume", null=True, default=None, blank=True)

	def __str__(self):
		return self.name +', '+ self.email +', '+ self.qualification


