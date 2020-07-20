from django.db import models



class Courses(models.Model):
    course_name = models.CharField(max_length=50)


    def __str__(self):
   		return self.course_name

class SubCourses(models.Model):
    sub_course_name = models.CharField(max_length=50)
    course = models.ForeignKey(Courses, null=True, on_delete=models.CASCADE)

    def __str__(self):
    	return self.sub_course_name


