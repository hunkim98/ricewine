# Generated by Django 3.2 on 2021-04-23 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_auto_20210423_1530'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storeitem',
            name='store',
            field=models.ManyToManyField(blank=True, to='store.Store'),
        ),
    ]
