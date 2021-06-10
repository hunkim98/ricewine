from django import forms
from django.contrib import admin, messages
from .models import Store, StoreItem, Pub, News, MyLocation
from django.utils.translation import ngettext


class MyLocationAdmin(admin.ModelAdmin):

    class Meta:
        model = MyLocation
        fields = '__all__'

    class Media:
        js = ('js/naver_search_map.js', )

    fields = ('name', 'address',
              'admin_unit_details', 'description',  'latitude', 'longditude', 'contact')

    readonly_fields = ('admin_unit_details', )

    def save_model(self, request, obj, form, change):
        if self.model.objects.all().count() == 1 and change == False:
            messages.set_level(request, messages.ERROR)
            messages.error(request, 'You cannot add more than one my location')
        else:
            super().save_model(request, obj, form, change)


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')


class StoreForm(forms.ModelForm):
    class Meta:
        model = Store
        fields = '__all__'

    items = forms.ModelMultipleChoiceField(
        queryset=StoreItem.objects.all(), widget=forms.CheckboxSelectMultiple, required=False)

    def __init__(self, *args, **kwargs):
        super(StoreForm, self).__init__(*args, **kwargs)
        if self.instance.id:
            self.fields['items'].initial = self.instance.items.all()

    def save_m2m(self):
        pass

    def save(self, commit=True):
        store = super(StoreForm, self).save(commit=False)

        if commit:
            store.save()
            store.save_m2m()
        store.save()
        store.items.set(self.cleaned_data['items'])

        return store


class StoreAdmin(admin.ModelAdmin):
    form = StoreForm
    fields = ('visible', 'name', 'location', 'description', 'address',
              'admin_unit_details', 'latitude', 'longditude', 'items')

    readonly_fields = ('admin_unit_details', )
    actions = ['make_hidden', 'make_visible']
    list_display = ('name', 'visible', 'location')

    @admin.action(description='Hide selected stores')
    def make_hidden(self, request, queryset):
        updated = queryset.update(visible=False)
        queryset.update(visible=False)
        self.message_user(request, ngettext(
            '%d store was successfully marked as hidden.',
            '%d stores were successfully marked as hidden',
            updated,
        ) % updated, messages.SUCCESS)

    @admin.action(description='Show selected stores')
    def make_visible(self, request, queryset):
        updated = queryset.update(visible=True)
        queryset.update(visible=True)
        self.message_user(request, ngettext(
            '%d store was successfully marked as visible.',
            '%d stores were successfully marked as visible',
            updated,
        ) % updated, messages.SUCCESS)

    class Media:
        js = ('js/naver_search_map.js', )


class PubForm(forms.ModelForm):
    class Meta:
        model = Pub
        fields = '__all__'

    items = forms.ModelMultipleChoiceField(
        queryset=StoreItem.objects.all(), widget=forms.CheckboxSelectMultiple, required=False)

    def __init__(self, *args, **kwargs):
        super(PubForm, self).__init__(*args, **kwargs)
        if self.instance.id:
            self.fields['items'].initial = self.instance.items.all()

    def save_m2m(self):
        pass

    def save(self, commit=True):
        store = super(PubForm, self).save(commit=False)

        if commit:
            store.save()
            store.save_m2m()
        store.save()
        store.items.set(self.cleaned_data['items'])

        return store


class PubAdmin(admin.ModelAdmin):
    form = PubForm
    fields = ('visible', 'name', 'location', 'description', 'address',
              'admin_unit_details', 'latitude', 'longditude', 'items')

    readonly_fields = ('admin_unit_details', )
    actions = ['make_hidden', 'make_visible']
    list_display = ('name', 'visible', 'location')

    @admin.action(description='Hide selected pubs')
    def make_hidden(self, request, queryset):
        updated = queryset.update(visible=False)
        queryset.update(visible=False)
        self.message_user(request, ngettext(
            '%d pub was successfully marked as hidden.',
            '%d pubs were successfully marked as hidden',
            updated,
        ) % updated, messages.SUCCESS)

    @admin.action(description='Show selected pubs')
    def make_visible(self, request, queryset):
        updated = queryset.update(visible=True)
        queryset.update(visible=True)
        self.message_user(request, ngettext(
            '%d pub was successfully marked as visible.',
            '%d pubs were successfully marked as visible',
            updated,
        ) % updated, messages.SUCCESS)

    class Media:
        js = ('js/naver_search_map.js', )


admin.site.register(Store, StoreAdmin)

admin.site.register(Pub, PubAdmin)

admin.site.register(StoreItem)

admin.site.register(News, NewsAdmin)

admin.site.register(MyLocation, MyLocationAdmin)
