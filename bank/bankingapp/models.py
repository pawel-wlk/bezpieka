from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import datetime


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.IntegerField(default=10_000)


@receiver(post_save, sender=User)
def create_user_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_account(sender, instance, **kwargs):
    instance.account.save()

class Transaction(models.Model):
    from_account = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="from_account")
    to_account = models.ForeignKey(Account, on_delete=models.DO_NOTHING, related_name="to_account")
    amount = models.PositiveIntegerField()
    date = models.DateField(default=datetime.date.today)

    def save(self, *args, **kwargs):
        self.from_account.balance -= self.amount
        self.to_account.balance += self.amount
        self.from_account.save()
        self.to_account.save()
        super().save(*args, **kwargs)
