import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard"
import '../css/QuestionList.css'
import Cookies from 'js-cookie'
import {quizContext} from './QuestionContext';

function QuizPage(props) {
    const [state, setState] = useState({
        questionList: [],
    });

    useEffect(() => {
        if (props.data == 1)
            var current_page = quizContext.page1
        if (props.data == 2)
            var current_page = quizContext.page2
        if (props.data == 3)
            var current_page = quizContext.page3
        if (props.data == 4)
            var current_page = quizContext.page4
        if (props.data == 5)
            var current_page = quizContext.page5
        if (props.data == 6)
            var current_page = quizContext.page6
        if (props.data == 7)
            var current_page = quizContext.page7
        if (props.data == 8)
            var current_page = quizContext.page8
        if (props.data == 9)
            var current_page = quizContext.page9
        if (props.data == 10)
        var current_page = quizContext.page10
        
        var questions = []
        var q1 = current_page.question1.question
        questions.push(q1)
        var q2 = current_page.question2.question
        questions.push(q2)
        var q3 = current_page.question3.question
        questions.push(q3)
        var q4 = current_page.question4.question
        questions.push(q4)
        var q5 = current_page.question5.question
        questions.push(q5)
        var q6 = current_page.question6.question
        questions.push(q6)
        setState({ questionList: questions})
    },[])
    
    return (
        <div>
            {state.questionList.map((question) => {
                if (props.data == 1)
                var current_page = quizContext.page1
                if (props.data == 2)
                    var current_page = quizContext.page2
                if (props.data == 3)
                    var current_page = quizContext.page3
                if (props.data == 4)
                    var current_page = quizContext.page4
                if (props.data == 5)
                    var current_page = quizContext.page5
                if (props.data == 6)
                    var current_page = quizContext.page6
                if (props.data == 7)
                    var current_page = quizContext.page7
                if (props.data == 8)
                    var current_page = quizContext.page8
                if (props.data == 9)
                    var current_page = quizContext.page9
                if (props.data == 10)
                    var current_page = quizContext.page10

                if (question === current_page.question1.question)
                    var current_question = current_page.question1

                if (question === current_page.question2.question)
                    var current_question = current_page.question2

                if (question === current_page.question3.question)
                    var current_question = current_page.question3

                if (question === current_page.question4.question)
                    var current_question = current_page.question4

                if (question === current_page.question5.question)
                    var current_question = current_page.question5
                
                if (question === current_page.question6.question)
                    var current_question = current_page.question6

                return (
                    <QuestionCard data={question} current={current_question}/>
                )
                })}
        </div>
    )
}

export default QuizPage;
