import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import alabama from "./../images/ala1.jpg";
const Truckparking = () => {
  return (
    <div className="inner-pages">
      <Header />
      <section className="page-title centred">
        <div className="bg-layer"></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Location</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="home">Home</a>
              </li>
              <li>Location</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="content-section">
        <div className="container">
          <div className="row cus-map-loc">
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>Alabama
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        2 Location
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>Georgia
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        25 Location
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>North Carolina
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        6 Location
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>South Carolina
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        1 Location
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>Texas
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        1 Location
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tourmaster-tour-category-grid tourmaster-item-list  tourmaster-item-pdlr tourmaster-item-mgb tourmaster-column-20 tourmaster-column-first tourmaster-with-thumbnail">
                <div className="tourmaster-tour-category-item-wrap">
                  <div className="tourmaster-tour-category-thumbnail tourmaster-media-image">
                    <img src={alabama} alt="ala" />
                  </div>
                  <div className="tourmaster-tour-category-overlay"></div>
                  <div className="tourmaster-tour-category-overlay-front"></div>
                  <div className="tourmaster-tour-category-head">
                    <div className="tourmaster-tour-category-head-display clearfix">
                      <h3 className="tourmaster-tour-category-title">
                      <i className="fa-solid fa-location-dot"></i>More Location
                      </h3>
                      <div className="tourmaster-tour-category-count">
                        Coming Soon
                      </div>
                    </div>
                    <div className="tourmaster-tour-category-head-animate">
                      <Link
                        className="tourmaster-tour-category-head-link"
                        href="#"
                      >
                        View all Location
                      </Link>
                      <div className="tourmaster-tour-category-head-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1LkPP1_uey4f_qEdsNIyYorjbfijYAi6Z" title="Google Maps222" width='100%' height="500"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Truckparking;
