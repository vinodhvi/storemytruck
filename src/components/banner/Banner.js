import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import video from './../images/video.mp4';
import icon1 from './../images/icon1.png';
import icon2 from './../images/icon2.png';
import icon3 from './../images/icon3.png';
import './Banner.css'
const Banner = () => {
    return(
        <div className="banner">
        <div className="banner-section">
            <video className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>
        </div>
        <div className="banner-bottom">
      
            <div className="row banner-bottoms">
                <div className="col-xl-4 col-lg-4">
               
                    <div className="banner-btm-ctn ">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                        <img src={icon1} alt="icon1"/>
                        <h5 className="color-blue">Reserve a Space</h5>
                        <p>Please choose the type of parking you would like</p>
                        <i className="fa-solid fa-arrow-right-long"></i>
                        </AnimationOnScroll>
                    </div>
                   
                </div>
                <div className="col-xl-4 col-lg-4">
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="banner-btm-ctn">
                        <img src={icon2} alt="icon1"/>
                        <h5 className="color-white">Specials & Offers</h5>
                        <p className="color-white">Exclusive Truck Parking Deals Await You!</p>
                        <i className="fa-solid fa-arrow-right-long"></i>
                       
                    </div>
                    </AnimationOnScroll>
                </div>
                <div className="col-xl-4 col-lg-4">
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <div className="banner-btm-ctn ">
                        <img src={icon3} alt="icon1"/>
                        <h5 className="color-white">Locations</h5>
                        <p className="color-white">Please Choose Your State for a List of our Available Locations Near You...</p>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    </AnimationOnScroll>
                </div>
            </div>
         
        </div>
        </div>
    )
}

export default Banner;