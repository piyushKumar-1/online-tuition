# Generated by Django 3.0.8 on 2020-07-23 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enquiry', '0008_auto_20200723_0729'),
    ]

    operations = [
        migrations.AddField(
            model_name='enquiry',
            name='other_sub',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
