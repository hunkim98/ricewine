from django import forms
from django.contrib import admin
from .models import Store, StoreItem


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
    fields = ('name', 'location', 'description', 'address',
              'admin_unit_details', 'latitude', 'longditude', 'items')

    readonly_fields = ('admin_unit_details', )

    class Media:
        js = ('js/naver_search_map.js', )


admin.site.register(Store, StoreAdmin)

admin.site.register(StoreItem)
