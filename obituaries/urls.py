from django.urls import path
from .views import submit_obituary, view_obituaries

urlpatterns = [
    path('submit/', submit_obituary, name='submit_obituary'),
    path('', view_obituaries, name='view_obituaries'),
]
