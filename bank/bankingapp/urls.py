from django.urls import path, include

from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('dashboard', views.dashboard, name='dashboard'),
  path('new_transaction/confirm', views.confirm_transaction, name='confirm_transaction'),
  path('new_transaction', views.new_transaction, name='new_transaction'),
  path('login', auth_views.LoginView.as_view(), name='login'),
  path('logout', auth_views.LogoutView.as_view(), name='logout'),
  path('register', views.register, name='register'),
]