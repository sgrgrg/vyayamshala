import React from 'react';
import '../css/ServicepageComponents/Gallery.css';

const images = [
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Group classes' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Yoga sessions' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Nutrition consultations' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Spa & massage room' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Personal training in progress' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Fitness workout' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Gym highlights' },
  { src: 'https://www.gravatar.com/avatar/?d=mp&s=128', alt: 'Wellness highlights' },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Experience Our Services in Action</h2>
      <div className="gallery-grid">
        {images.map(({ src, alt }, idx) => (
          <img key={idx} src={src} alt={alt} loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
