# Generated by Django 3.1 on 2020-08-24 16:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0014_auto_20200822_1713'),
    ]

    operations = [
        migrations.AddField(
            model_name='subjectenrolled',
            name='sub_enrolled_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='uploadedmaterial',
            name='upload_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
