import React, { useState } from 'react';
import '../css/ServicepageComponents/ServiceDetails.css';
import { FaClock, FaComments } from 'react-icons/fa';

const serviceDetailsData = {
  'Personal Training': {
    intro: "Work one-on-one with our certified fitness professionals to develop a customized training plan that suits your goals, schedule, and lifestyle.",
    included: [
      "Weekly progress checks",
      "Tailored workouts",
      "Flexible scheduling",
    ],
    benefits: [
      "Improved mobility",
      "Accountability",
      "Personalized coaching",
    ],
    suitableFor: ['Beginner', 'Intermediate', 'Advanced'],
    pricingLink: '/pricing#personal-training',
    icons: {
      timing: <FaClock />,
      coaching: <FaComments />,
    },
  },
  // Add other services similarly...
};

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState('Personal Training');
  const details = serviceDetailsData[selectedService];

  return (
    <section className="service-details">
      <h2>{selectedService}</h2>
      <p className="intro">{details.intro}</p>
      <div className="details-section">
        <div>
          <h3>What’s Included:</h3>
          <ul>
            {details.included.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Benefits:</h3>
          <ul>
            {details.benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Suitable For:</h3>
          <div className="tags">
            {details.suitableFor.map((level) => (
              <span key={level} className="tag">{level}</span>
            ))}
          </div>
        </div>
        <div className="pricing">
          <h3>Pricing:</h3>
          <a href={details.pricingLink}>View Pricing Details</a>
        </div>
      </div>
      <div className="service-icons">
        <span title="Flexible Timing">{details.icons.timing}</span>
        <span title="Coaching Support">{details.icons.coaching}</span>
      </div>
    </section>
  );
};

export default ServiceDetails;
