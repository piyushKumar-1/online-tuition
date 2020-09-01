# Generated by Django 3.1 on 2020-08-31 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0016_chatmodel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='events',
            name='course',
        ),
        migrations.RemoveField(
            model_name='events',
            name='department',
        ),
        migrations.RemoveField(
            model_name='events',
            name='subject',
        ),
        migrations.AddField(
            model_name='events',
            name='topic',
            field=models.CharField(default=1, max_length=400),
            preserve_default=False,
        ),
    ]
