import React, { useState, useEffect } from "react";
import { css, keyframes } from "styled-components";
import '../css/QuestionCard.css';
import {quizContext} from './QuestionContext';

function QuestionCard(question){

    const [answer, setAnswer] = useState(); 

    const handleChange = (event) => {
        question.current.answer = event.target.value
        setAnswer(event.target.value)
        window.scrollBy({
            top: 300,
            behavior : "smooth"
        })
      }

    
    return (
        <div>
            <div
             className="container">
            <h1 className="question">{question.data}</h1>
            <div className="radio-container">
                <label className="disagree">
                    <input name={question.data} className="all-radio all-radio-disagree radio two" type="radio" checked={question.current.answer==="option1"} 
                    onChange={handleChange} value="option1" required></input>
                </label>

                <label className="disagree">
                    <input name={question.data} className="all-radio all-radio-disagree radio one" type="radio" checked={question.current.answer==="option2"}
                    onChange={handleChange} value="option2"></input>
                </label>

                <label className="neutral">
                    <input name={question.data} className="all-radio all-radio-neutral radio zero" type="radio" checked={question.current.answer==="option3"}
                    onChange={handleChange} value="option3"></input>
                </label>

                <label className="agree">
                    <input name={question.data} className="all-radio all-radio-agree radio one" type="radio" checked={question.current.answer==="option4"}
                    onChange={handleChange} value="option4"></input>
                </label>

                <label className="agree">
                    <input name={question.data} className="all-radio all-radio-agree radio two" type="radio" checked={question.current.answer==="option5"}
                    onChange={handleChange}value="option5"></input>
                </label>
            </div>
            </div>
        </div>
    );
}

export default QuestionCard

