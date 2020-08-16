from django.db import models
from django.utils import timezone
from users.models import CustomUser
from courses.models import Courses, Subjects, SubCourses






class Events(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
	course = models.ForeignKey(Courses, on_delete=models.CASCADE)
	department = models.ForeignKey(SubCourses, on_delete=models.CASCADE)
	subject = models.ForeignKey(Subjects, on_delete=models.CASCADE, null=True, blank=True, default=True)
	event_time = models.TimeField()
	event_date = models.DateField()
	teacher = models.ForeignKey(CustomUser, related_name='teacher', on_delete=models.CASCADE)
	live_link = models.URLField(null=True)


class CoursesEnrolled(models.Model):
	student = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
	course_enrolled = models.ForeignKey(Courses, on_delete=models.CASCADE)
	department = models.ForeignKey(SubCourses, on_delete=models.CASCADE)
	subject = models.ForeignKey(Subjects, on_delete=models.CASCADE, null=True, blank=True, default=True)
	enrolled_date = models.DateTimeField(default=timezone.now)