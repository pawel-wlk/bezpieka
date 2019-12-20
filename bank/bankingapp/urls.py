from django.urls import path, include, re_path

from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('dashboard', views.dashboard, name='dashboard'),
  path('new_transaction/confirm', views.confirm_transaction, name='confirm_transaction'),
  path('new_transaction', views.new_transaction, name='new_transaction'),
  path('accept_panel', views.accept_panel, name='accept_panel'),
  re_path(r'accept/(?P<transid>\d+)$', views.accept_transaction, name='accept'),
  path('register', views.register, name='register'),
  path('accounts/', include('django.contrib.auth.urls')),
]