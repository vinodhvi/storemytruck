import React from "react";
import './Location.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function Location() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className="Location-section mt-5">
        <div className="container">
            <div className="tabs">
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
       
        <div className="tabs-name">
        <AnimationOnScroll animateIn="animate__zoomIn">
      <h2 className=" color-blue">Our Locations</h2>
      <p>Discover Truck Parking Excellence at Our Locations!</p>
      </AnimationOnScroll>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
     
         
        >
          <Tab label="  Alabama" {...a11yProps(0)} />
          <Tab label=" South carolina" {...a11yProps(1)} />
          <Tab label=" North carolina" {...a11yProps(2)} />
          <Tab label=" Georgia" {...a11yProps(3)} />
          <Tab label=" Texas" {...a11yProps(4)} />
        
        </Tabs>
        </div>
        <div className="tab-content">
            
        <TabPanel value={value} index={0}>
            <div className="location-address">
       
              <iframe 
      
      width="75%"
      height="400"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      title="Google Maps"
      referrerPolicy="no-referrer-when-downgrade"
             
                src="//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=513980198961327005&ineditor=0&control=3&width=auto&height=400px&overviewmap=0&scalecontrol=0&typecontrol=0&zoom=15&long=-86.8209423&lat=33.5411329&domain=www&point=1&align=1&reseller=false"></iframe>
              <div className="map-address">
                <h3 className="color-blue">Alabama</h3>
                <p>Birmingham Tractor Trailer Truck Parking<br/><span>2301 24th Ave N., Birmingham, AL 35234</span></p>
                <Link to="/" className="button">View all locations</Link>
              </div>
              </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="location-address">
           
              <iframe 
               width="75%"
               height="400"
               style={{ border: "0" }}
               allowFullScreen
               loading="lazy"
               title="Google Maps4"
               referrerPolicy="no-referrer-when-downgrade"
             
                src="//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=531141121765682402&ineditor=0&control=3&width=auto&height=400px&overviewmap=0&scalecontrol=0&typecontrol=0&zoom=15&long=-82.592625&lat=34.636319&domain=www&point=1&align=1&reseller=false"></iframe>
              <div className="map-address">
                <h3 className="color-blue">South carolina</h3>
                <p>Anderson SC Truck Parking & Repairs <br/><span>301 Webb Rd. Williamston, SC 29697</span></p>
                <Link to="/" className="button">View all locations</Link>
              </div>
              </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="location-address">
            
              <iframe 
               width="75%"
               height="400"
               style={{ border: "0" }}
               allowFullScreen
               loading="lazy"
               title="Google Maps3"
               referrerPolicy="no-referrer-when-downgrade"
                src="//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=437501002935486136&ineditor=0&control=3&width=auto&height=400px&overviewmap=0&scalecontrol=0&typecontrol=0&zoom=15&long=-80.87849130000001&lat=35.2830629&domain=www&point=1&align=1&reseller=false"></iframe>
              <div className="map-address">
                <h3 className="color-blue">North carolina</h3>
                <p>Charlotte Big Rig Truck Parking & Storage <br/><span>4710 Chesapeake Dr, Charlotte, NC 28216</span></p>
                <Link to="/" className="button">View all locations</Link>
              </div>
              </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className="location-address">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.1369726234233!2d76.98630864568754!3d10.99745812485194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859bf59b00001%3A0x7304ccc640b59019!2sANGLER%20Technologies!5e0!3m2!1sen!2sin!4v1694664969503!5m2!1sen!2sin"
                width="75%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                title="Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> 
              <div className="map-address2">
                <h3 className="color-blue">Georgia</h3>
                <p>Adairsville Chatsworth Truck Parking  <br/><span>293 Johnson Lake Rd SE Adairsville, GA 30103</span></p>
                <Link to="/" className="button">View all locations</Link>
              </div>
              </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div className="location-address">
           
             <iframe
                width="75%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                title="Google Maps1"
                referrerPolicy="no-referrer-when-downgrade"
                 src="//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=151396358865119643&ineditor=0&control=3&width=auto&height=350px&overviewmap=0&scalecontrol=0&typecontrol=0&zoom=15&long=-97.0259865&lat=32.8357571&domain=www&point=1&align=1&reseller=false"></iframe>
              <div className="map-address">
                <h3 className="color-blue">Texas</h3>
                <p>Dallas/ Forth Worth Truck Parking<br/><span>5100 W Airport Fwy, Irving, TX 75062</span></p>
                <Link to="/" className="button">View all locations</Link>
              </div>
              </div>
        </TabPanel>
        </div>
      </Box>
      </div>
      </div>
      </div>
    );
  }