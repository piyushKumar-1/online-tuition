from django.db import models
from django.utils import timezone
from users.models import CustomUser
from courses.models import Courses, Subjects, SubCourses
from teacher.models import BecomeTeacher






class Events(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
	course = models.ForeignKey(Courses, on_delete=models.CASCADE)
	department = models.ForeignKey(SubCourses, on_delete=models.CASCADE)
	subject = models.ForeignKey(Subjects, on_delete=models.CASCADE, null=True, blank=True, default=True)
	event_time = models.TimeField()
	event_date = models.DateField()
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.CASCADE)
	live_link = models.URLField(null=True)


class CoursesEnrolled(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
	course_enrolled = models.ForeignKey(Courses, on_delete=models.CASCADE)
	department = models.ForeignKey(SubCourses, on_delete=models.CASCADE)
	enrolled_date = models.DateTimeField(default=timezone.now)
	completed = models.IntegerField(default=0)
	teacher = models.ForeignKey(BecomeTeacher, on_delete=models.CASCADE, null=True, blank=True, default=None)
	subject_ids = models.CharField(max_length=200, null=True, blank=True, default=None)

class SubjectEnrolled(models.Model):
	enrollment = models.ForeignKey(CoursesEnrolled, on_delete=models.CASCADE)
	enrolled_sub = models.ForeignKey(Subjects, on_delete=models.SET_NULL, null=True, default=True, blank=True)
	sub_enrolled_date = models.DateTimeField(default=timezone.now)


class UploadedMaterial(models.Model):
	student_enrolled_subject = models.ForeignKey(SubjectEnrolled, on_delete=models.SET_NULL, null=True, default=True)
	uploaded_material = models.FileField(upload_to="teacher/material_for_students", null=True, default=None)
	upload_date = models.DateTimeField(default=timezone.now)
