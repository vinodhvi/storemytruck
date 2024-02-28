import React, { useState } from 'react';
import "./Sign.css";
import bg from "./../images/login-bg.jpg";
import { Link } from "react-router-dom";
import logo from './../images/logo.png'
const Signin = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    phoneNumber: '',
    accountOwnerName: '',
    companyName: '',
    companyPhoneNumber: '',
    licenseNumber: '',
    password: '',
    status: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validation logic
    if (formData.userType.length < 3 || formData.userType.length > 75) {
      validationErrors.userType = 'User Type must be between 3 and 75 characters';
    }
    if (formData.name.length < 3 || formData.name.length > 75) {
      validationErrors.name = 'Name must be between 3 and 75 characters';
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!/^\d+$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must contain only numeric digits';
    }
    if (formData.accountOwnerName.length < 3 || formData.accountOwnerName.length > 75) {
      validationErrors.accountOwnerName = 'Account Owner Name must be between 3 and 75 characters';
    }
    if (formData.companyName.length < 3 || formData.companyName.length > 75) {
      validationErrors.companyName = 'Company Name must be between 3 and 75 characters';
    }
    if (!/^\d+$/.test(formData.companyPhoneNumber)) {
      validationErrors.companyPhoneNumber = 'Company Phone number must contain only numeric digits';
    }
    if (!/^\d+$/.test(formData.licenseNumber)) {
      validationErrors.licenseNumber = 'License Number must contain only numeric digits';
    }
    if (formData.password.length < 50 || formData.password.length > 200) {
      validationErrors.password = 'Password must be between 50 and 200 characters';
    }
    if (formData.status !== '0' && formData.status !== '1') {
      validationErrors.status = 'Status must be either 0 or 1';
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  
  return (
    <div className="sign-up-form">
        
      <div className="row cus-sign-row">
        <div className="col-xl-6 col-lg-6 col-12 cus-login">
          <img src={bg} alt="login" />
          <div className="logos">
          <img src={logo} alt="logo1" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-12 cus-form">
        <h2>Signup </h2>
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="userType"
            placeholder="User Type"
            value={formData.userType}
            onChange={handleChange}
          />
          {errors.userType && <span className="error">{errors.userType}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Your Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="accountOwnerName"
            placeholder="Account Owner Name"
            value={formData.accountOwnerName}
            onChange={handleChange}
          />
          {errors.accountOwnerName && <span className="error">{errors.accountOwnerName}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="tel"
            className="form-control"
            id="companyPhoneNumber"
            placeholder="Company Phone Number"
            value={formData.companyPhoneNumber}
            onChange={handleChange}
          />
          {errors.companyPhoneNumber && <span className="error">{errors.companyPhoneNumber}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <input
            type="number"
            className="form-control"
            id="licenseNumber"
            placeholder="License number"
            value={formData.licenseNumber}
            onChange={handleChange}
          />
          {errors.licenseNumber && <span className="error">{errors.licenseNumber}</span>}
        </div>
        <div className="col-lg-6 col-xl-6">
          <select
            className="form-control select"
            id="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="0">Status</option>
            <option value="0">Active</option>
            <option value="1">Inactive</option>
          </select>
          {errors.status && <span className="error">{errors.status}</span>}
        </div>
        <div className="col-lg-6 col-xl-6 cus-pass">
          <input
            className="form-control"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <i className="fa-regular fa-eye-slash"></i>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="red_btn">
            Submit
          </button>
        </div>
      </div>
          </form>
          <div className="line"></div>
          <div className="guest">
               <span>Signup as <Link to="/">Guest </Link></span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Signin;
