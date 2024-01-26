import React, { useState, useEffect } from "react";
import '../css/Footer.css';
import logo from './images/logo.png';

function Footer() {
    return (
        
        <div className="footer-div">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className="footer-card">
                <div className="footer-left-section">
                    <div className="footer-text">
                        <h1 className="footer-title">about passionfruit</h1>
                        <p className="footer-text">Passionfruit is a personality test service made for you. 
                        The test only takes 12-15 minutes and you will get to see a in-depth analysis of your personality right when you click submit. 
                        Completely for free, for you. Based off of the scientifically-proven and researched theories of the Big Five and Myers-Briggs assessments,
                        Passionfruit offers an accurate and reliable interpretation of your personality. Designed and developed by Daivik and Shrenik Patel. </p>
                    </div>
                    <div className="footer-logo-container">
                        <img src={logo} className="footer-logo-img"></img>
                    </div>

                </div>
                <div className="footer-right-section">
                    <div className="footer-text">
                        <h1 className="footer-title">contact us</h1>
                        <p className="footer-text">We'd love to hear any feedback you may have!<br />  
                        <b><a className="email-text" href="mailto:passionfruitpersonality@gmail.com">passionfruitpersonality@gmail.com</a></b><br /><br />Thank you for taking the test!
                        </p>
                        {/* <div className="socials">
                            <h1 className="footer-title">follow us pls</h1>
                            <a href="https://twitter.com/" className="fa fa-twitter" target="_blank"></a>
                        </div> */}
                    </div>
                </div>
                <p className="copyright">&copy; 2022 Passionfruit</p>
            </section>
        </div>
    )
}

export default Footer;
