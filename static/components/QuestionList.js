import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard"
import '../css/QuestionList.css'
import Cookies from 'js-cookie'
import {quizContext} from './QuestionContext';
import QuizPage from './QuizPage';


function QuestionList() {
    const [state, setState] = useState({
        questionList: [],
        index: 0,
        answers_list: {},
    });

    // NEEDED FOR TAGS
    useEffect(() => {axios({
        method: "GET",
        url: "/api/questions", 
        headers: {"content-type": "application/json",
                    "X-CRSFToken": null}
    })
    .then((response) => {
        const data = response.data;
        setState({questionList: data})
    })}, [])

    const QuizProvider = React.createContext(quizContext.page1)
    const [page, setPage] = useState(1);

    function prev(){
        if(page === 1)
            setPage(1)
        else {
            setPage(page - 1)
            const testSection = document.getElementById("test-scroll");
            testSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    function next(){
        if(page === 10)
            setPage(10)
        else {
            setPage(page + 1)
            const testSection = document.getElementById("test-scroll");
            testSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    // function test(){

    //     var qa_list = []

    //     for (var p in quizContext)
    //         for (var q in quizContext[p])
    //                 for (var a in quizContext[p][q])
    //                     qa_list.push(quizContext[p][q][a])
        
    //     let i = qa_list.length;
    //     let n = 2;
        
    //     while (i--) (i) % n === 0 && (qa_list.splice(i, 1));
    //     console.log(qa_list)
    //     console.log(String(qa_list))

    //     if (!qa_list.includes(null))
    //         console.log("EVERYTHING IS ANSWERED")
    //     if (qa_list.includes(null))
    //         console.log("MISSING ANSWERS")
    // }

    function checked(){
        const tags = []
        state.questionList.map((object) => {tags.push(object.tags)})

        var qa_list = []

        for (var p in quizContext)
            for (var q in quizContext[p])
                    for (var a in quizContext[p][q])
                        qa_list.push(quizContext[p][q][a])
        
        let i = qa_list.length;
        let n = 2;
        
        while (i--) (i) % n === 0 && (qa_list.splice(i, 1));
        console.log(qa_list)

        const answer_model = JSON.stringify({
            tags: String(tags),
            inputs: String(qa_list)
          });
          
          const csrftoken = Cookies.get('csrftoken') 
          axios.defaults.withCredentials = true;

        if (!qa_list.includes(null))
            axios.post("/api/answers/", answer_model, 
            {headers:{"Content-Type" : "application/json", 'X-CSRFToken': csrftoken}}
            )
            .then((response) => {
                const input_data = response.data;
                location.replace(`results/${input_data.id}`)
            });
        else
            console.log("You have not answered all the questions!")
            document.getElementById("error").style.display = "block";
    }

    return (
        <div>
        <div id="test-scroll"></div>
        <QuizProvider.Provider value={page}>
            <QuizPage data={page}/>
        </QuizProvider.Provider >
        <div className="page-btns">
        <button className="prev-btn" onClick={prev}><a className="arrow-symbol">&#10094;</a></button>
        <button className="next-btn" onClick={next}><a className="arrow-symbol">&#10095;</a></button>
        </div>
        {/* <button className="test-btn" onClick={test}>test.</button> */}
        <h3 id="error">You have not answered all the questions.</h3>
        <button className="submit-btn" onClick={checked}>submit.</button>
        </div>
    )
}

export default QuestionList;
