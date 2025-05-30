import React from 'react';
import '../css/HomepageComponents/facilities.css';

const facilitiesData = [
  {
    id: 1,
    title: 'Lockers and towels',
    description: 'Equipped with modern machines and free weights for all fitness levels.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
  {
    id: 2,
    title: 'Indoor Swimming Pool',
    description: 'Heated pool available year-round for training and leisure.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
  {
    id: 3,
    title: 'Yoga Studio',
    description: 'Peaceful space for yoga, meditation, and wellness classes.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
  {
    id: 4,
    title: 'Personal Training',
    description: 'Certified trainers to help you reach your fitness goals.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
  {
    id: 5,
    title: 'Nutrition Counseling',
    description: 'Expert advice to complement your workout and lifestyle.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
  {
    id: 6,
    title: 'Spa and Sauna',
    description: 'Relax and recover with our spa treatments and sauna facilities.',
    imageUrl: 'https://www.gravatar.com/avatar/?d=mp&s=128',
  },
];

const Facilities = () => {
  return (
    <div className="facilities-container" data-aos="fade-up" data-aos-delay="100">
      <h2 className="facilities-heading" data-aos="fade-down" data-aos-delay="200">Our Facilities</h2>
      <div className="facilities-grid">
        {facilitiesData.map(({ id, title, description, imageUrl }, index) => (
          <div key={id} className="facility-item" data-aos="fade-up" data-aos-delay={300 + index * 100}>
            <div className="facility-image" data-aos="zoom-in" data-aos-delay={400 + index * 100}>
              <img src={imageUrl} alt={title} />
            </div>
            <div className="facility-content" data-aos="fade-left" data-aos-delay={500 + index * 100}>
              <h3 className="facility-title">{title}</h3>
              <p className="facility-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
