# Generated by Django 3.0.8 on 2020-08-18 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='becometeacher',
            name='resume',
            field=models.FileField(blank=True, default=None, null=True, upload_to='teacher'),
        ),
    ]
