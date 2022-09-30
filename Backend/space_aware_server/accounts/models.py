from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Answer(models.Model):
    text = models.CharField(max_length=100)

    class Meta:
        db_table = 'answer'


class Question(models.Model):
    question = models.CharField(max_length=100)
    correct_answer = models.CharField(max_length=100)
    answers = models.ManyToManyField(Answer)

    class Meta:
        db_table = 'question'


class Quiz(models.Model):
    score = models.IntegerField(default=0)
    questions = models.ManyToManyField(Question)

    class Meta:
        db_table = 'quiz'


class UserProfile(models.Model):
    score = models.IntegerField(default=0)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    quizzes = models.ManyToManyField(Quiz)
    username = models.CharField(max_length=200, default='')

    class Meta:
        db_table = 'userprofile'
