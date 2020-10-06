from django.db import models



class Courses(models.Model):
    course_name = models.CharField(max_length=50)
    active_field = models.BooleanField()
    def __str__(self):
   		return self.course_name

class SubCourses(models.Model):
    sub_course_name = models.CharField(max_length=50)
    course = models.ForeignKey(Courses, null=True, on_delete=models.CASCADE)
    active_field = models.BooleanField()

    def __str__(self):
    	return self.sub_course_name
class Subjects(models.Model):
    sub_course = models.ForeignKey(SubCourses, on_delete=models.CASCADE, default=None, null=True)
    subject_name = models.CharField(max_length=100)
    active_field = models.BooleanField()
    course = models.ForeignKey(Courses, on_delete=models.CASCADE, blank=True, default=None, null=True)

    def get_course(self):
        return self.sub_course

    def __str__(self):
        return self.subject_name