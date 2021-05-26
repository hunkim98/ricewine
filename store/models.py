from django.db import models
from django.utils.html import format_html
# Create your models here.


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
    hidden = models.BooleanField(default=False)

    def __str__(self):
        if self.hidden:
            return self.name + " ( HIDDEN )"
        else:
            return self.name


class StoreItem(models.Model):
    store = models.ManyToManyField(Store, blank=True, related_name='items')
    itemName = models.CharField(max_length=200)
    description = models.TextField()
    mainImage = models.ImageField(upload_to="images", null=True, blank=True)
    dateIntroduced = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.itemName
