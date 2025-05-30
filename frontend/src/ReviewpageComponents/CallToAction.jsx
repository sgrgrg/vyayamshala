import React from 'react';
import '../css/ReviewpageComponents/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action-section">
      <h2>🎯 Ready to Start Your Own Transformation?</h2>
      <p>Join the thousands who’ve trusted Vyayamshala with their fitness journey.</p>
      <div className="cta-buttons">
        <button className="join-now-button">Join Now</button>
        <button className="book-session-button">Book a Free Session</button>
      </div>
    </section>
  );
};

export default CallToAction;
