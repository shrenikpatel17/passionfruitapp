#Django Library
from django.urls import path

from api.models import Results

#Django Modules 
from .views import QuestionsList, AnswersList, ResultsList, ResultsAPI

urlpatterns = [
    path("questions/", QuestionsList.as_view()),
    path("answers/", AnswersList.as_view()),
    path("results/", ResultsList.as_view()),
    path("results/<int:id>/", ResultsAPI.as_view()),
]