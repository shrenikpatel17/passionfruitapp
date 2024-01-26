from attr import fields
from rest_framework import serializers
from .models import Question, Answers, Results

class QuestionSerilalizer(serializers.ModelSerializer):
    """Question Serializer Class"""

    class Meta: 
        model = Question
        fields = ["id", "title", "tags", "option1", "option2", "option3", "option4", "option5"]

class AnswersSerilalizer(serializers.ModelSerializer):
    """Answers Serializer Class"""

    class Meta: 
        model = Answers
        fields = ["id", "tags", "inputs"]

class ResultsSerilalizer(serializers.ModelSerializer):
    """Answers Serializer Class"""

    class Meta: 
        model = Results
        fields = ["id", "previous_id", "whole_percents", "interquartile_percents", "strengths", "ambiguities", "summary", "tips"]