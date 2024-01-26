import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import Navbar from "./Navbar";
import '../css/HomePage.css';
import hero from './images/hero.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import brain from './images/brain3.png'
import Footer from './Footer'
import Number from './Number'
import Fade from 'react-reveal/Fade';

function HomePage() {

    const handleClick = () => {
        const testSection = document.getElementById("test-scroll");
             testSection.scrollIntoView({ behavior: "smooth" });
         }

    return (
        
        <div className="whole">
            <Navbar />
            <section className="first-section">
                <Fade left>
                    <div className="text-container">
                        <h1 className="title text">your personality starts here.</h1>
                    </div>
                </Fade>
                    <btn className="take-test-btn" onClick={()=>handleClick()}>take test.</btn>
                    <div className="hero-container">
                        <img src={hero} className="hero-img"></img>
                    </div>
                    <div className="pill-container">
                        <div className="right-container" /> 
                        <div className="right-container-2" /> 
                        <div className="right-container-3" /> 
                    </div>
                    <div className="brain-container">
                        <img src={brain} className="brain-img"></img>
                    </div>
            </section>
            <section>
                <Number />
            </section>
            <section className="second-section">
            <Fade left>
                <div className="text-container-2 animate-left">
                    <h1 className="main-text text">what is passionfruit?</h1>
                    <p className="para-text text">Passionfruit is a personality test derived from the scientifically-proven and researched theories of the Big Five and Myers-Briggs assessments. It includes five main categories: Agreeableness, Conscientiousness, Extraversion, Emotional Range, & Openness. Our mission with Passionfruit is to serve and help people learn and discover more about themselves in an insightful and convenient manner. </p>
                </div>
            </Fade>
            <Fade right>
                <div className="img1-container">
                        <img src={img2} className="img1"></img>
                </div>
            </Fade>
            <div className="pill-container-2">
                    <div className="right-container-img2" />
            </div> 
            </section>
            <section className="last-section">
            <Fade right>
            <div className="right-text-container">
                    <h1 className="main-text text">personality is personal.</h1>
                    <p className="para-text text">Results that are tailored for you. Our assessment is 60 questions and only takes around 12-15 minutes to complete. Instantly get your personal results with an in depth analysis, multiple graphical representations, & specific tips on your ambiguities for free. Join us on our journey to help others discover themselves with meaning and purpose. </p>
                </div>
            </Fade> 
            <Fade left>
                <div className="img2-container">
                        <img src={img1} className="img2"></img>
                </div>
            </Fade>
            <div className="pill-container-3">
                    <div className="right-container-img3" />
            </div> 
            </section>
            <section id="test-scroll" className="test-section">
            <Fade>
                <div className="center-text-container">
                    <h1 className="main-text text">the test.</h1>
                    <p className="info-text text">12-15 minutes. thoughtfully answer all questions.</p>
                </div>
            </Fade>
            </section>
            <Fade>
                <QuestionList className="question-section"/>
            </Fade>
            <div className="end-padding" />
            <Footer />
        </div>
    );
}
export default HomePage;
