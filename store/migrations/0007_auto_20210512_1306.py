# Generated by Django 3.2 on 2021-05-12 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_alter_storeitem_mainimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='latitude',
            field=models.CharField(default='0', max_length=50),
        ),
        migrations.AddField(
            model_name='store',
            name='longditude',
            field=models.CharField(default='0', max_length=50),
        ),
    ]
