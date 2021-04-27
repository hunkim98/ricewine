from django.db import models

# Create your models here.


class Store(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    address = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class StoreItem(models.Model):
    store = models.ManyToManyField(Store, blank=True, related_name='items')
    itemName = models.CharField(max_length=200)
    description = models.TextField()
    mainImage = models.ImageField(null=True, blank=True)
    dateIntroduced = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.itemName
