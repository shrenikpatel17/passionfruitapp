import React, { useState, useEffect } from "react";
import '../css/Navbar.css';
import logo from './images/logo.png';
// import Spin from 'react-reveal/Spin';
// import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';


function Navbar() {
    return (
        <div>
          <Jump>
            <div className="logo-img-container">
              <a href="/"><img src={logo} className="logo-img"></img></a>
            </div>
          </Jump>
         <div className="logo"><b>passionfruit.</b></div>
        </div>
    )
}

export default Navbar;
