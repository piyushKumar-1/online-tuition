# Generated by Django 3.0.8 on 2020-11-05 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0004_auto_20200820_1403'),
        ('student', '0026_auto_20201105_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursesenrolled',
            name='select_teachers',
            field=models.ManyToManyField(blank=True, default=None, null=True, related_name='teacher_selected', to='teacher.BecomeTeacher'),
        ),
    ]
