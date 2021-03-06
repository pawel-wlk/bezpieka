# Generated by Django 2.2.7 on 2019-11-11 16:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.IntegerField(default=10000)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.PositiveIntegerField()),
                ('from_account', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='from_account', to='bankingapp.Account')),
                ('to_account', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='to_account', to='bankingapp.Account')),
            ],
        ),
    ]
