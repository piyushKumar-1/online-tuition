from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from teacher.models import BecomeTeacher
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    is_parent = models.BooleanField(default=False)
    teacher = models.ForeignKey(BecomeTeacher,verbose_name='Make teacher From Applications', blank=True, null=True ,default=None, on_delete=models.SET_NULL)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return self.email

class Occupation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    occupation = models.CharField(max_length=100, blank=True)

class Education(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    course = models.CharField(max_length=25, blank=True)
    year = models.IntegerField(blank=True, null=True)
    department = models.CharField(max_length=50, blank=True)