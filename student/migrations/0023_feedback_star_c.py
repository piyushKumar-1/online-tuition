# Generated by Django 3.0.8 on 2020-10-10 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0022_auto_20201006_1538'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='star_c',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
