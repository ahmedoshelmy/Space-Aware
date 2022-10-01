from .views import *
from django.urls import path
from knox import views as knox_views

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('all_users/', AllUsers.as_view()),
    path('all_profiles/', AllProfiles.as_view()),
    path('single_profile/<str:name>', UserView.as_view()),
    path('ranked_profiles/', RankedUserView.as_view()),
]
