import React from 'react'
import '../css/HomepageComponents/landingpage.css'
import videoSrc from '../assets/video.mp4'
import playIcon from '../assets/play.png'

const LandingPage = ({ onVideoLoaded }) => {
  const handleVideoCanPlay = () => {
    if (onVideoLoaded) {
      onVideoLoaded()
    }
  }

  return (
    <div className="landingpage-container" data-aos="fade-up" data-aos-delay="100">
      <div className="landingpage-left" data-aos="fade-right" data-aos-delay="200">
        <h1 className="landingpage-heading" data-aos="fade-down" data-aos-delay="300">
          Join the world <br /> of fitness.
        </h1>
        <p className="landingpage-aim" data-aos="fade-up" data-aos-delay="400">
          Our aim is to bring more people into fitness so that every individual, family, society and whole nation.
        </p>
        <div className="landingpage-buttons" data-aos="fade-up" data-aos-delay="500">
          <button className="btn join-btn" data-aos="zoom-in" data-aos-delay="600">Join Now</button>
          <button className="btn watch-btn" data-aos="zoom-in" data-aos-delay="700">
            <img src={playIcon} alt="Play" className="play-icon" />
            Watch Video
          </button>
        </div>
        <div className="landingpage-stats">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="800">
            <div className="stat-number">7</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="900">
            <div className="stat-number">25k+</div>
            <div className="stat-label">Happy customers</div>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="1000">
            <div className="stat-number">95</div>
            <div className="stat-label">Gym Trainers</div>
          </div>
        </div>
      </div>
      <div className="landingpage-right" data-aos="fade-left" data-aos-delay="300">
        <video
          className="landingpage-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          onCanPlay={handleVideoCanPlay}
        />
      </div>
    </div>
  )
}

export default LandingPage
