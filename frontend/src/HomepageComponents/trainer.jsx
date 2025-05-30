import React, { useState, useEffect, useRef } from 'react';
import '../css/HomepageComponents/trainer.css';

const trainers = [
  { id: 1, name: 'Trainer One', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 2, name: 'Trainer Two', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 3, name: 'Trainer Three', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 4, name: 'Trainer Four', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 5, name: 'Trainer Five', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 6, name: 'Trainer Six', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 7, name: 'Trainer Seven', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 8, name: 'Trainer Eight', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 9, name: 'Trainer Nine', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 10, name: 'Trainer Ten', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 11, name: 'Trainer Eleven', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
  { id: 12, name: 'Trainer Twelve', image: 'https://www.gravatar.com/avatar/?d=mp&s=128' },
];

const Trainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const sliderRef = useRef(null);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? trainers.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= trainers.length ? 0 : prev + 1
    );
  };

  let visibleTrainers = trainers.slice(startIndex, startIndex + visibleCount);

  if (visibleTrainers.length < visibleCount) {
    visibleTrainers = visibleTrainers.concat(trainers.slice(0, visibleCount - visibleTrainers.length));
  }

  // Responsive visible count based on window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let responsiveVisibleCount = visibleCount;
  if (windowWidth < 768) {
    responsiveVisibleCount = 2;
  } else if (windowWidth < 1024) {
    responsiveVisibleCount = 4;
  }

  // Adjust visible trainers based on responsive count
  visibleTrainers = trainers.slice(startIndex, startIndex + responsiveVisibleCount);
  if (visibleTrainers.length < responsiveVisibleCount) {
    visibleTrainers = visibleTrainers.concat(trainers.slice(0, responsiveVisibleCount - visibleTrainers.length));
  }

  return (
    <div className="trainer-container" data-aos="fade-up" data-aos-delay="100">
      <div className="trainer-header" data-aos="fade-down" data-aos-delay="200">
        <h2>Meet our Trainers</h2>
        <a href="#" className="view-all-link" aria-label="View all trainers">View All</a>
      </div>
      <div className="trainer-slider" ref={sliderRef} aria-roledescription="carousel">
        <button
          className="slider-button left"
          onClick={prevSlide}
          aria-label="Previous trainers"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {'<'}
        </button>
        <div className="trainer-list" style={{ '--visible-count': responsiveVisibleCount }}>
          {visibleTrainers.map((trainer, index) => (
            <div key={trainer.id} className="trainer-item" tabIndex="0" aria-label={`Trainer ${trainer.name}`} data-aos="fade-up" data-aos-delay={400 + index * 100}>
              <div className="trainer-image-wrapper">
                <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                <div className="trainer-overlay">
                  <p className="trainer-overlay-name">{trainer.name}</p>
                  <p className="trainer-overlay-info">Expert in fitness training</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="slider-button right"
          onClick={nextSlide}
          aria-label="Next trainers"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Trainer;
