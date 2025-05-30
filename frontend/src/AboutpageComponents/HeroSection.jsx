import React from 'react';
import '../css/AboutpageComponents/HeroSection.css';
import backgroundVideo from '../assets/video.mp4';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video className="hero-background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="hero-headline">Empowering Lives Through Fitness</h1>
        <p className="hero-subheadline">
          Welcome to Vyayamshala, where fitness meets purpose and community. We are more than just a gym—we are a movement, a family, and a lifestyle. Located in the heart of Pokhara, our mission is simple: to inspire healthier living through personalized fitness experiences in an environment where everyone feels motivated, supported, and empowered.
        </p>
        <button className="hero-cta-button">Join Our Family</button>
      </div>
    </section>
  );
};

export default HeroSection;
