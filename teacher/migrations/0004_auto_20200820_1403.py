# Generated by Django 3.0.8 on 2020-08-20 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0003_auto_20200819_0902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='becometeacher',
            name='resume',
            field=models.FileField(blank=True, default=None, null=True, upload_to='teacher/resume'),
        ),
    ]
