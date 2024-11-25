from . import views
from django.urls import path, include

urlpatterns = [
    path("", views.music, name="music"),
]