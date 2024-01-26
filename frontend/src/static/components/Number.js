import React, { useState, useEffect } from "react";
import '../css/Navbar.css';
import logo from './images/logo.png';
// import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import left from './images/leftbutterfly.png'
import right from './images/rightbutterfly.png'


function Number() {
    return (
        <div>
            <Fade left>
                <div className="num-text-top">take the test and join over</div>
            </Fade>
            <Fade>
                <div className="left-bf-container desktop-only">
                    <img className="left-bf-img desktop-only" src={left}></img>
                </div>
            </Fade>
            <div className="center-num"><b>270,000+</b></div>
            <Fade>
                <div className="right-bf-container desktop-only">
                    <img className="right-bf-img desktop-only" src={right}></img>
                </div>
            </Fade>
            <Fade right>
                <div className="num-text-bottom">people who have discovered their personalities!</div>
            </Fade>
        </div>
    )
}

export default Number;