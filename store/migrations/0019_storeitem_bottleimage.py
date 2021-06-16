# Generated by Django 3.2 on 2021-06-14 15:36

import cloudinary.models
from django.db import migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0018_auto_20210610_0251'),
    ]

    operations = [
        migrations.AddField(
            model_name='storeitem',
            name='bottleImage',
            field=cloudinary.models.CloudinaryField(default=django.utils.timezone.now, max_length=255, verbose_name='image'),
            preserve_default=False,
        ),
    ]