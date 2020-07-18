from django import forms
from .models import Courses, SubCourses

class CreateCourse(forms.Form):
    class Meta:
    	model = Courses
    	fields = ('course_name',)


class CreateSubCourse(forms.Form):
  # TODO: Define form fields here
  class Meta:
  	model = SubCourses
  	fields = ('sub_course_name',)

