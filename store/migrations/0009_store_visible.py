# Generated by Django 3.2 on 2021-05-26 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_auto_20210512_1311'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]
