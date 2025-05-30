import React from 'react';
import '../css/HomepageComponents/service.css';

const servicesData = [
  { id: 1, name: 'Personal Training', icon: '🏋️‍♂️' },
  { id: 2, name: 'Group Classes', icon: '🤸‍♀️' },
  { id: 3, name: 'Nutrition Plans', icon: '🥗' },
  { id: 4, name: 'Wellness Coaching', icon: '🧘‍♂️' },
  { id: 5, name: 'Massage Therapy', icon: '💆‍♂️' },
  { id: 6, name: 'Yoga Sessions', icon: '🧘‍♀️' },
];

const Service = () => {
  return (
    <div className="service-container" data-aos="fade-up" data-aos-delay="100">
      
      {/* Left side */}
      <div className="service-left" data-aos="fade-right" data-aos-delay="200">
        <h2 className="service-title" data-aos="fade-down" data-aos-delay="300">Services</h2>
        <p className="service-description" data-aos="fade-up" data-aos-delay="400">
          We provide services that fit the best for you.
        </p>
        <p className="service-subdescription" data-aos="fade-up" data-aos-delay="500">
          Strive for greatness with the best, around the best and in the best fitness environment available in the city.
        </p>
        <button className="service-button" data-aos="zoom-in" data-aos-delay="600">
          See All
        </button>
      </div>

      {/* Right side */}
      <div className="service-right" data-aos="fade-left" data-aos-delay="300">
        {servicesData.map((service, index) => (
          <div key={service.id} className="service-item" data-aos="fade-up" data-aos-delay={700 + index * 100}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Service;
