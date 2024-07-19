# obituary_platform/urls.py
from django.contrib import admin
from django.urls import path
from obituaries import views  # Import views from the obituaries app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Route to home view
    path('obituaries/', views.view_obituaries, name='view_obituaries'),  # Route to view_obituaries view
    path('submit/', views.submit_obituary, name='submit_obituary'),  # Route to submit_obituary view
]
