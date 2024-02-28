import React from "react";
import './Pages.css';

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Alabama =() => {
    return(
        <div className="inner-pages">
             <Header/>
             <section className="page-title centred">
            <div className="bg-layer"></div>
            <div className="line-box">
                <div className="line-1"></div>
                <div className="line-2"></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Alabama Location</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="home">Home</a></li>
                        <li>Alabama Location</li>
                     
                    </ul>
                </div>
            </div>
        </section>
        <div className="content-section">
        <div className="container">
            <div className="new-location">

            </div>
            <div className="new-map">
            <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1LkPP1_uey4f_qEdsNIyYorjbfijYAi6Z" width='100%' height="480" title="new-map"/>
            </div>
        </div>
            </div>
            <Footer/>
            </div>
    )
}

export default Alabama;