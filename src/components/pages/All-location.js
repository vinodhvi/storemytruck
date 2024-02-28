import React from "react";
import './Pages.css';
import { Link } from "react-router-dom";
import Header from "../header/Header";
import loc1 from './../images/alabama.jpg'

  
 const AllLocation = ()=>  {
 
    return (
        <div>
             <Header/>
          
        <div className="content-sections">
        <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-xl-5 content-left ">
              <div className="row">
                  <div className="col-xl-6">
                  <div className="location-address">
          
          <div className="map-address cus-map-address">
            <img src={loc1} alt="alabama1"/>     
            <div className="location-details">
          <h3 className="color-blue">Alabama</h3>
          
          <Link href="#" className="button">More Detail</Link>
          </div>
          </div>
          </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="location-address">
          
          <div className="map-address cus-map-address">
            <img src={loc1} alt="alabama1"/>     
            <div className="location-details">
          <h3 className="color-blue">Georgia</h3>
          
          <Link href="#" className="button">More Detail</Link>
          </div>
          </div>
          </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="location-address">
          
          <div className="map-address cus-map-address">
            <img src={loc1} alt="alabama1"/>     
            <div className="location-details">
          <h3 className="color-blue">North Carolina</h3>
          
          <Link href="#" className="button">More Detail</Link>
          </div>
          </div>
          </div>
                  </div>
                  <div className="col-xl-6">
                  <div className="location-address">
          
          <div className="map-address cus-map-address">
            <img src={loc1} alt="alabama1"/>     
            <div className="location-details">
          <h3 className="color-blue">South Carolina</h3>
          
          <Link href="#" className="button">More Detail</Link>
          </div>
          </div>
          </div>
                  </div>
                
                  <div className="col-xl-6">
                  <div className="location-address">
          
          <div className="map-address cus-map-address">
            <img src={loc1} alt="alabama1"/>     
            <div className="location-details">
          <h3 className="color-blue">Texas</h3>
          
          <Link href="#" className="button">More Detail</Link>
          </div>
          </div>
          </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-7 map-right">
          <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1LkPP1_uey4f_qEdsNIyYorjbfijYAi6Z" title="Google Maps22" width='100%' height="500"></iframe>
          </div>
       </div>    
   
      </div>
      </div>

     
     
      </div>
    );
  }

  export default AllLocation;