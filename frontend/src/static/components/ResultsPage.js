import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../css/ResultsPage.css"
import BarChart from "./BarChart"
import PieChart from "./PieChart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import meditate from "./images/meditating.png";
import defpic1 from "./images/defpic1.png";
import defpic2 from "./images/defpic2.png";
import defpic3 from "./images/defpic3.png";
import defpic4 from "./images/defpic4.png";
import defpic5 from "./images/defpic5.png";
import bookpic from "./images/book.png"


function ResultsPage() {
    const [state, setState] = useState({
        resultData: {}
    });

    let  params = useParams();
    
    useEffect(() => {
        if (params.id) {
            getResults(params.id);
        }
        else
            console.log("NO ID FOUND")
    }, [params])

    function getResults(id) {
        axios({
                method:"GET",
                url:`/api/results/${id}/`
            })
            .then((response) => {
                const data = response.data;
                setState({resultData: data})
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })
    }

    const interquartiles = String(state.resultData.interquartile_percents)
    const interquartile_percents = interquartiles.split(" ");
    const wholes = String(state.resultData.whole_percents)
    const whole_percents = wholes.split(" ");

    const data = [interquartile_percents]
    const pieData = [whole_percents]

    var strengths = String(state.resultData.strengths)
    strengths = strengths.split(' ').join(', ');

    var ambigs = String(state.resultData.ambiguities)
    ambigs = ambigs.split(' ').join(', ');

    var tipsString = String(state.resultData.tips)
    var tipsArray = tipsString.split('. ')

    return (
        <div>
        <div className="whole">
            <Navbar className="nav-bar" />
            <h1 className="text result-title">all about you.</h1>
            <div className="brief-card">
            <p className="text brief-text">the following is a breakdown of your personality based on your resposnes to the questions.</p>
            </div>
            <section className="info-section">
                <div className="info-card">
                    <h1 className="text def-title">the five categories.</h1>
                    <div className="column">
                        <div className="card-def card-bg-1">
                            <h1 className="text title-card">agreeableness</h1>
                            <p className="text def-text def-card">Measures how one is able to treat others in both personal and professional relationships.
</p>
                            <div className="defpic-container">
                                <img class="defpic-img" src={defpic1}></img>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-def card-bg-2">
                            <h1 className="text title-card">conscientiousness</h1>
                            <p className="text def-text def-card">Measures one's impulse control when it comes to setting goals and accomplishing them. 
</p>
                            <div className="defpic-container">
                                <img class="defpic-img" src={defpic2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-def card-bg-3">
                            <h1 className="text title-card">extraversion</h1>
                            <p className="text def-text def-card">Measures the extent to which one puts themselves in front of people to interact with them. 
</p>
                            <div className="defpic-container">
                                <img class="defpic-img" src={defpic3}></img>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-def card-bg-4">
                            <h1 className="text title-card">emotional range</h1>
                            <p className="text def-text def-card">Measures the emotional stability of one under different circumstances. 
</p>
                            <div className="defpic-container">
                                <img class="defpic-img" src={defpic4}></img>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-def card-bg-5">
                            <h1 className="text title-card">openness</h1>
                            <p className="text def-text def-card">Measures one's willingness to embrace change and discover new activities. 
</p>
                            <div className="defpic-container">
                                <img class="defpic-img" src={defpic5}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="extra-margin-bottom" />
            <div className="bar-chart">
                <BarChart data={data}></BarChart>
            </div>
            <div className="pie-chart">
                <PieChart data={pieData}></PieChart>
            </div>
            <section className="sw-section">
            <div className="column-2">
                <div className="strengths-card">
                    <h1 className="text sw-title">your strengths.</h1>
                    <p className="text sw-card">{strengths}</p>
                </div>
            </div>
            <div className="column-2">
                <div className="ambig-card">
                    <h1 className="text sw-title">your ambiguities.</h1>
                    <p className="text sw-card">{ambigs}</p>
                </div>
            </div>
            </section>
            <section className="summary-section">
                <div className="summary-card">
                    <h1 className="text summary-title">your analysis.</h1>
                    <p className="text summary-text">{state.resultData.summary}</p>
                </div>
            </section>
            <section className="tips-section">
                <div className="tips-card">
                    <h1 className="text tips-title">tips.</h1>
                    <p className="text tips-text">1. {tipsArray[0]}.<br /><br />2. {tipsArray[1]}.<br /><br />
                    3. {tipsArray[2]}.<br /><br />4. {tipsArray[3]}.<br /><br />5. {tipsArray[4]}.<br /><br />6. {tipsArray[5]}<br /></p>
                </div>
                <div className="meditate-container">
                    <img class="meditate-img" src={meditate}></img>
                </div>
                <div className="last-pill-container">
                    <div className="right-pill-img" />
                </div>
            </section>
            </div>
            <div className="footer-section">
            < Footer />
            </div>
        </div>
    )
}

export default ResultsPage