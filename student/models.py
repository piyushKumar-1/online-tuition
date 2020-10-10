from django.db import models
from django.utils import timezone
from users.models import CustomUser
from courses.models import Courses, Subjects, SubCourses
from teacher.models import BecomeTeacher


class Events(models.Model):
	topic = models.CharField(max_length=400)
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
	event_time = models.TimeField()
	event_date = models.DateField()
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.CASCADE)
	live_link = models.URLField(null=True)

	def __str__(self):
		return "Topic: "+self.topic+", Student: "+self.student.first_name+", teacher: "+self.teacher.name


class CoursesEnrolled(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
	course_enrolled = models.ForeignKey(Courses, on_delete=models.CASCADE)
	department = models.ForeignKey(SubCourses, on_delete=models.CASCADE)
	enrolled_date = models.DateTimeField(default=timezone.now)
	completed = models.IntegerField(default=0)
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.SET_DEFAULT, null=True, blank=True, default=None)

class SubjectEnrolled(models.Model):
	enrollment = models.ForeignKey(CoursesEnrolled, on_delete=models.CASCADE)
	enrolled_sub = models.ForeignKey(Subjects, on_delete=models.SET_NULL, null=True, default="Check Uploads", blank=True)
	sub_enrolled_date = models.DateTimeField(default=timezone.now)


class UploadedMaterial(models.Model):
	student_enrolled_subject = models.ForeignKey(SubjectEnrolled, on_delete=models.SET_NULL, null=True, default=True)
	uploaded_material = models.FileField(upload_to="teacher/material_for_students", null=True, default=None)
	upload_date = models.DateTimeField(default=timezone.now)




class ChatModel(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.SET_DEFAULT, null=True, default=None)
	msg = models.CharField(max_length=2000)
	msg_time = models.DateTimeField(auto_now_add=True)
	approval = models.BooleanField(default=False)
	msg_side = models.BooleanField(default=True) #true for student and false for teacher

	
class StudentUpload(models.Model):
	department = models.ForeignKey(CoursesEnrolled, on_delete=models.CASCADE)
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.SET_DEFAULT, default=None, null=True)
	syllabus = models.FileField(upload_to="student/syllabus_assignemnts")
	text = models.CharField(max_length=200, default=None, null=True)



class Feedback(models.Model):
	course_enrolled = models.ForeignKey(CoursesEnrolled, on_delete=models.CASCADE)
	about_instructor = models.CharField(max_length=200)
	concept = models.CharField(max_length=200)
	about_session = models.CharField(max_length=200)
	star_c = models.IntegerField()