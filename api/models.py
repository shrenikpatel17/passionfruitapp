from itertools import count
from django.db import models

class Question(models.Model):
    title = models.TextField(default="")
    tags = models.CharField(default="", max_length=50)
    option1 = models.CharField(default="", max_length=10, blank=True, null=True)
    option2 = models.CharField(default="", max_length=10, blank=True, null=True)
    option3 = models.CharField(default="", max_length=10, blank=True, null=True)
    option4 = models.CharField(default="", max_length=10, blank=True, null=True)
    option5 = models.CharField(default="", max_length=10, blank=True, null=True)
    answer = models.CharField(default="", max_length=50, blank=True, null=True)

class Answers(models.Model):
    tags = models.TextField(default="")
    inputs = models.TextField(default="")

class Results(models.Model):
    previous_id = models.CharField(max_length=100)
    interquartile_percents = models.TextField(default="")
    whole_percents = models.TextField(default="")
    strengths = models.TextField(default="")
    ambiguities = models.TextField(default="")
    summary = models.TextField(default="")
    tips = models.TextField(default="")


