import React from 'react';
import '../css/HomepageComponents/connect.css';
import connectImage from '../assets/connect.jpg';

const Connect = () => {
  return (
    <div className="connect-container">
      <h2 className="connect-heading" style={{ transition: 'none' }}>What’s Stopping you?</h2>
      <div className="connect-content">
        <div className="connect-image-container" style={{ transition: 'none' }}>
          <img src={connectImage} alt="Connect" className="connect-image" />
        </div>
        <div className="connect-form-container" style={{ transition: 'none' }}>
          <h3 className="connect-title">Become a part of our family</h3>
          <p className="connect-subtitle">Leave your details and we will get back to you !</p>
          <form className="connect-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="connect-input"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="connect-input"
              required
            />
            <button type="submit" className="connect-button">Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
