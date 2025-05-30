import React from 'react';
import '../css/AboutpageComponents/MeetTheTeam.css';

const MeetTheTeam = () => {
  const placeholderImage = 'https://www.gravatar.com/avatar/?d=mp&s=128';

  return (
    <section className="meet-the-team">
      <h2>Meet Our Trainers</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer One" />
          <h3>Trainer One</h3>
          <p>Strength & Conditioning Specialist</p>
        </div>
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer Two" />
          <h3>Trainer Two</h3>
          <p>Weight Loss & Body Sculpting Coach</p>
        </div>
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer Three" />
          <h3>Trainer Three</h3>
          <p>Functional Training Expert</p>
        </div>
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer Four" />
          <h3>Trainer Four</h3>
          <p>Yoga & Mindfulness Instructor</p>
        </div>
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer Five" />
          <h3>Trainer Five</h3>
          <p>Sports Rehabilitation Coach</p>
        </div>
        <div className="team-member">
          <img src={placeholderImage} alt="Trainer Six" />
          <h3>Trainer Six</h3>
          <p>Nutritional Advisor & Wellness Guide</p>
        </div>
      </div>
      <a href="/team" className="full-team-link">Meet the Full Team →</a>
      <blockquote className="founder-quote">
        "Our community is our strength. Together, we achieve more." - Founder
      </blockquote>
    </section>
  );
};

export default MeetTheTeam;
