# Generated by Django 3.2 on 2021-06-05 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0012_pub'),
    ]

    operations = [
        migrations.AddField(
            model_name='storeitem',
            name='pub',
            field=models.ManyToManyField(blank=True, related_name='items', to='store.Pub'),
        ),
    ]
