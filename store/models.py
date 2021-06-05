from django.db import models
from django.utils.html import format_html
from cloudinary.models import CloudinaryField
# Create your models here.


class News(models.Model):
    title = models.CharField(max_length=200)
    source = models.CharField(max_length=200)
    url = models.URLField(max_length=200)
    date = models.DateField()

    def __str__(self):
        return self.title


class Store(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    address = models.CharField(max_length=200)

    def admin_unit_details(self):  # Button for admin to get to API
        return format_html(u'<a href="#" onclick="return false;" class="button" '
                           u'id="id_search_naver_map">Search Naver Map</a>')
    admin_unit_details.allow_tags = True
    admin_unit_details.short_description = " "
    latitude = models.CharField(max_length=50, default='')
    longditude = models.CharField(max_length=50, default='')
    visible = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Pub(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    address = models.CharField(max_length=200)

    def admin_unit_details(self):  # Button for admin to get to API
        return format_html(u'<a href="#" onclick="return false;" class="button" '
                           u'id="id_search_naver_map">Search Naver Map</a>')
    admin_unit_details.allow_tags = True
    admin_unit_details.short_description = " "
    latitude = models.CharField(max_length=50, default='')
    longditude = models.CharField(max_length=50, default='')
    visible = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class StoreItem(models.Model):
    store = models.ManyToManyField(Store, blank=True, related_name='items')
    pub = models.ManyToManyField(Pub, blank=True, related_name='items')
    itemName = models.CharField(max_length=200)
    description = models.TextField()
    mainImage = CloudinaryField('image')
    dateIntroduced = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.itemName
