import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Pages.css';
import ReactPlayer from 'react-player';
import { locationdata } from "./data/Location-data";
const Locationvideos =()=> {
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
                    <h1>Location Videos</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="home">Home</a></li>
                        <li>Location Videos</li>
                     
                    </ul>
                </div>
            </div>
        </section>
        <div className="content-section">
            <div className="container">
            <div className="row">
  {locationdata.map((item, index) => (
    <div className="col-xl-4 col-lg-4" key={index}>
      <ReactPlayer controls={true} url={item.url} width='100%' height='100%'  config={{
   youtube: {
    playerVars: { controls: 1 }
  },
  }}/>
    </div>
  ))}
</div>
            </div>
        </div>
            <Footer/>
        </div>
    )
}

export default Locationvideos;