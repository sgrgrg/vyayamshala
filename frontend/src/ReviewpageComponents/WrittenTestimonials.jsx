import React, { useState } from 'react';
import '../css/ReviewpageComponents/WrittenTestimonials.css';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    photo: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    name: 'Alice M.',
    age: 29,
    duration: '1 year',
    title: 'Lost 15kg and gained confidence!',
    text: 'I joined Vyayamshala a year ago, and it has truly changed my life. The trainers are incredibly supportive, and the environment keeps me motivated every day.',
    category: 'Weight Loss',
  },
  {
    id: 2,
    rating: 4,
    photo: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    name: 'Bob S.',
    age: 35,
    duration: '6 months',
    title: 'Strength training that works!',
    text: 'The strength training program helped me gain muscle and improve my overall fitness. Highly recommend Vyayamshala.',
    category: 'Strength Training',
  },
  {
    id: 3,
    rating: 5,
    photo: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    name: 'Cathy L.',
    age: 42,
    duration: '8 months',
    title: 'Yoga for mental wellness',
    text: 'The yoga classes have helped me reduce stress and improve flexibility. The community is very welcoming.',
    category: 'Yoga',
  },
];

const categories = ['All Reviews', 'Weight Loss', 'Strength Training', 'Yoga', 'Wellness'];

const WrittenTestimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Reviews');

  const filteredTestimonials =
    selectedCategory === 'All Reviews'
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star' : 'star empty'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="written-testimonials-section">
      <h2>💬 Written Testimonials</h2>
      <div className="testimonial-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === selectedCategory ? 'filter-button active' : 'filter-button'}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="testimonial-grid">
        {filteredTestimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-rating">{renderStars(t.rating)}</div>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <div className="testimonial-info">
              <h3 className="testimonial-title">{t.title}</h3>
              <p className="testimonial-meta">
                {t.name}, {t.age} years, {t.duration} member
              </p>
              <p className="testimonial-text">“{t.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WrittenTestimonials;
