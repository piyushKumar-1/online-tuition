# Generated by Django 3.1 on 2020-09-11 07:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0020_auto_20200903_1457'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_instructor', models.CharField(max_length=200)),
                ('concept', models.CharField(max_length=200)),
                ('about_session', models.CharField(max_length=200)),
                ('course_enrolled', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student.coursesenrolled')),
            ],
        ),
    ]
