from django.urls import path
from . import views
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView


urlpatterns = [
    path('', views.index ),
    path('results/<int:id>/', views.index),
    path('results/<int:id>/favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('favicon.ico')))
    
]