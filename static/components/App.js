import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";
import PageNotFound from "./PageNotFound";


function App() {
    useEffect(() => {
    });
    
    return (
        <div className="app">
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/results/:id/" element={<ResultsPage />} />
            </Routes>
        </div>
    )
}

export default App; 

const container = document.getElementById("app");
render(
    <Router>
        <App />
    </Router>,
    container
    );


