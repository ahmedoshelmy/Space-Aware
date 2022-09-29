from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=20, )
    description = models.TextField()
    image = models.CharField(max_length=30, )
    resource = models.CharField(max_length=30)
