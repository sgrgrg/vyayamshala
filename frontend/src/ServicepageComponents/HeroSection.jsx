import React from 'react';
import '../css/ServicepageComponents/HeroSection.css';
const heroImage = 'https://images.unsplash.com/photo-1554284126-4e0b9a1a1a1a?auto=format&fit=crop&w=1350&q=80'; // Use image URL instead of local import
import { FaDumbbell, FaSpa, FaLeaf, FaRunning } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find the Right Service for Your Fitness Journey</h1>
          <p>Whether you're looking to lose weight, build strength, or restore balance, we’ve got you covered.</p>
          <div className="hero-buttons">
            <button className="btn explore-btn">Explore All Plans</button>
            <button className="btn consult-btn">Book a Free Consultation</button>
          </div>
          <div className="hero-icons">
            <FaDumbbell title="Weightlifting" />
            <FaLeaf title="Wellness" />
            <FaSpa title="Massage" />
            <FaRunning title="Yoga" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
