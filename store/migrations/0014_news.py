# Generated by Django 3.2 on 2021-06-05 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_storeitem_pub'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('source', models.CharField(max_length=200)),
                ('date', models.DateField()),
            ],
        ),
    ]