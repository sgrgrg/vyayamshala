import React from "react";
import "../css/HomepageComponents/careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <h1>Careers at Vyayamshala</h1>
      <p>Join our team and help us make a difference in fitness and wellness.</p>
      <section className="job-openings">
        <h2>Current Openings</h2>
        <ul>
          <li>Fitness Trainer</li>
          <li>Yoga Instructor</li>
          <li>Nutritionist</li>
          <li>Front Desk Coordinator</li>
        </ul>
      </section>
      <section className="application-info">
        <h2>How to Apply</h2>
        <p>
          Please send your resume and cover letter to{" "}
          <a href="mailto:careers@vyayamshala.com">careers@vyayamshala.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Careers;
