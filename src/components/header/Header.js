import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './Header.css';
import logo from './../images/logo.png'
import React, { useState, useEffect } from 'react';
const Header = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  return (
    <div>
      <div className="header-top">
          <div className="container">
              <div className="top-header row">
                <div className="col-xl-6 col-lg-6">
                    <Link to='/'>Customer Service: 678-631-7275</Link>
                </div>
                <div className="col-xl-6 col-lg-6">
                <Link to='/' className="button1">Membership Sign Up</Link>
                <Link to='sign-in' className="button1">Sign Up</Link>
                </div>
              </div>
            
          </div>
      </div>
    <header  className={` ${stickyClass}` }>
      <div className="container">
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo} alt="logo"/>
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
      </div>
    </header>
    </div>
      
  )
};

export default Header;
