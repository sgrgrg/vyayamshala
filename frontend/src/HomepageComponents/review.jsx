import React, { useState, useEffect, useCallback } from 'react';
import '../css/HomepageComponents/review.css';

const reviews = [
  {
    title: "Stories of our Vyayamshala Family",
    text: "A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshala’s layouts, environment and it’s surrounding itself plays vital role to motivate and go beyond your limitation.",
    rating: 5,
    author: "Jhon Doe, Student",
    beforeImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
    afterImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
  },
  {
    title: "More Stories from Vyayamshala",
    text: "The trainers are very supportive and the environment is motivating. I have seen great progress in my fitness journey.",
    rating: 4,
    author: "Jane Smith, Member",
    beforeImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
    afterImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
  },
  {
    title: "Vyayamshala Family Testimonials",
    text: "Vyayamshala offers excellent facilities and a friendly community. Highly recommend for anyone serious about fitness.",
    rating: 5,
    author: "Mike Johnson, Athlete",
    beforeImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
    afterImg: "https://www.gravatar.com/avatar/?d=mp&s=128",
  },
];

const ReviewItem = React.memo(({ review, isActive, index }) => {
  const { title, text, rating, author, beforeImg, afterImg } = review;

  return (
    <article
      className={`review-item ${isActive ? 'active' : ''}`}
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
      role="group"
      aria-roledescription="slide"
      aria-label={`${title} review`}
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <h2 className="review-title" data-aos="fade-down" data-aos-delay={index * 200}>
        {title}
      </h2>
      <div className="review-content" data-aos="fade-up" data-aos-delay={index * 300}>
        <section className="review-photos" aria-label="Before and after photos" data-aos="zoom-in" data-aos-delay={index * 400}>
          <figure className="photo before-photo">
            <img src={beforeImg} alt="Before transformation" loading="lazy" />
            <figcaption className="photo-caption">Before</figcaption>
          </figure>
          <figure className="photo after-photo">
            <img src={afterImg} alt="After transformation" loading="lazy" />
            <figcaption className="photo-caption">After</figcaption>
          </figure>
        </section>
        <section className="review-text-section" data-aos="fade-left" data-aos-delay={index * 500}>
          <p className="review-text">
            <span className="quote" aria-hidden="true">“</span>
            {text}
            <span className="quote" aria-hidden="true">”</span>
          </p>
          <div
            className="review-rating"
            aria-label={`Rating: ${rating} out of 5 stars`}
            role="img"
            data-aos="fade-up"
            data-aos-delay={index * 600}
          >
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
          <p className="review-author" data-aos="fade-up" data-aos-delay={index * 700}>{author}</p>
        </section>
      </div>
    </article>
  );
});

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const prevSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  }, [animating]);

  const nextSlide = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  }, [animating]);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section
      className="review-slider"
      aria-roledescription="carousel"
      aria-label="User reviews"
      data-aos="fade-up"
    >
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} isActive={index === currentIndex} index={index} />
      ))}
      <div className="review-controls">
        <button
          onClick={prevSlide}
          aria-label="Previous Review"
          className="review-btn"
          disabled={animating}
          type="button"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Review"
          className="review-btn"
          disabled={animating}
          type="button"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Review;
