from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.TextField()
    description = models.TextField()
    image = models.TextField()
    resource = models.TextField()

    class Meta:
        db_table = 'article'
