import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard"
import '../css/QuestionList.css'
import Cookies from 'js-cookie'

export const quizContext = {
    page1: {
        question1: {
            question: "Something I enjoy is caring and attending to others' needs", 
            answer: null
        },
        question2: {
            question: "I am always willing to put in the hard work to be helpful to others", 
            answer: null
        },
        question3: {
            question: "When working with others, I often find myself arguing over small things", 
            answer: null
        },
        question4: {
            question: "I am open to all types of people and accept them as they are", 
            answer: null
        },
        question5: {
            question: "I don't put myself in the spotlight even if I have done something others would deem worthy", 
            answer: null
        },
        question6: {
            question: "I take pride on my actions and believe that I am always right", 
            answer: null
        },
    },
    page2: {
        question1: {
            question: "I usually go the way others want me to even if my opinions differ", 
            answer: null
        },
        question2: {
            question: "I try to prove my opinion even after others have disagreed", 
            answer: null
        },
        question3: {
            question: "I always have something good to say for everyone", 
            answer: null
        },
        question4: {
            question: "I often find myself criticizing other people", 
            answer: null
        },
        question5: {
            question: "I always stay true to my words", 
            answer: null
        },
        question6: {
            question: "I often refrain from telling the truth", 
            answer: null
        },
    },
    page3: {
        question1: {
            question: "I feel obligated to achieve great things", 
            answer: null
        },
        question2: {
            question: "I am willing to put in the work and take all the risks that are needed for success", 
            answer: null
        },
        question3: {
            question: "I always take action to prepare and plan for the future", 
            answer: null
        },
        question4: {
            question: "I analyze things from every perspective", 
            answer: null
        },
        question5: {
            question: "I tend to get all my work done immediately", 
            answer: null
        },
        question6: {
            question: "I frequently put off my work until later", 
            answer: null
        },
    },
    page4: {
        question1: {
            question: "It is hard for me to focus if my workspace is not clean", 
            answer: null
        },
        question2: {
            question: "I prefer not to make many plans as I end up changing them frequently", 
            answer: null
        },
        question3: {
            question: "I don't stop until a task is done", 
            answer: null
        },
        question4: {
            question: "It is hard for me to work consistently for long periods of time", 
            answer: null
        },
        question5: {
            question: "I hold myself to very high standards and feel I can reach them", 
            answer: null
        },
        question6: {
            question: "I believe that I can accomplish even the largest of my aspirations", 
            answer: null
        },
    },
    page5: {
        question1: {
            question: "I enjoy seeing my schedule full and keeping myself occupied", 
            answer: null
        },
        question2: {
            question: "I don't feel comfortable with many responsibilities", 
            answer: null
        },
        question3: {
            question: "I tend to allow others to make the decisions", 
            answer: null
        },
        question4: {
            question: "I tell others my opinions, even if it is hard for them to hear", 
            answer: null
        },
        question5: {
            question: "I keep the party alive", 
            answer: null
        },
        question6: {
            question: "I frequently bring smiles to people's faces", 
            answer: null
        },
    },
    page6: {
        question1: {
            question: "I frequently take risks and believe in 'Go big, or go home'", 
            answer: null
        },
        question2: {
            question: "I tend to take the safest route possible without putting much on the line", 
            answer: null
        },
        question3: {
            question: "People often tell me that I am a friendly person", 
            answer: null
        },
        question4: {
            question: "I rarely have a hard time making new friends", 
            answer: null
        },
        question5: {
            question: "I work better with others rather than alone", 
            answer: null
        },
        question6: {
            question: "I often feel that there is no need for social groups in my life", 
            answer: null
        },
    },
    page7: {
        question1: {
            question: "I rarely find myself having strong emotions", 
            answer: null
        },
        question2: {
            question: "It doesn't take much to put me into a bad mood", 
            answer: null
        },
        question3: {
            question: "I often worry about the future", 
            answer: null
        },
        question4: {
            question: "I feel anxious regarding what could go wrong in a situation", 
            answer: null
        },
        question5: {
            question: "I always see the positive in every situation", 
            answer: null
        },
        question6: {
            question: "I complain when things don't go the way I want them to go", 
            answer: null
        },
    },
    page8: {
        question1: {
            question: "I often dwell on the things others say to me", 
            answer: null
        },
        question2: {
            question: "It is important to me how others perceive me", 
            answer: null
        },
        question3: {
            question: "I am able to control myself even if everyone is pressuring me", 
            answer: null
        },
        question4: {
            question: "I am always able to maintain control over what I say", 
            answer: null
        },
        question5: {
            question: "I understand the value of everything I have and I don't take things for granted", 
            answer: null
        },
        question6: {
            question: "I often realize the value of things I had after I lose them", 
            answer: null
        },
    },
    page9: {
        question1: {
            question: "I feel most comfortable doing the things I have always done.", 
            answer: null
        },
        question2: {
            question: "I try to make many changes in my life to avoid boredom", 
            answer: null
        },
        question3: {
            question: "I believe in the importance of art and expression through crafts and music", 
            answer: null
        },
        question4: {
            question: "I enjoy viewing art or listening to music", 
            answer: null
        },
        question5: {
            question: "I have a firm understanding of my strengths and weaknesses", 
            answer: null
        },
        question6: {
            question: "I am able to comprehend why I feel a certain way in different situations", 
            answer: null
        },
    },
    page10: {
        question1: {
            question: "I find that my mind is full of imaginative ideas", 
            answer: null
        },
        question2: {
            question: "I don't have interest in abstract/fantastical ideas", 
            answer: null
        },
        question3: {
            question: "I love to try new things", 
            answer: null
        },
        question4: {
            question: "I tend to not take part or interest in philosophical ideas", 
            answer: null
        },
        question5: {
            question: "I follow what a person of authority tells me to do, even if I may not always agree", 
            answer: null
        },
        question6: {
            question: "I like to do everything my own way", 
            answer: null
        },
    },
}
