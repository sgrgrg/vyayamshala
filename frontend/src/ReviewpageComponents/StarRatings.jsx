import React from 'react';
import '../css/ReviewpageComponents/StarRatings.css';

const StarRatings = () => {
  const averageRating = 4.9;
  const totalReviews = 300;
  const categories = [
    { name: 'Facility Cleanliness', rating: 4.8 },
    { name: 'Trainer Expertise', rating: 5.0 },
    { name: 'Equipment Quality', rating: 4.7 },
    { name: 'Customer Service', rating: 4.9 },
    { name: 'Atmosphere', rating: 4.8 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="star">&#9733;</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={'empty' + stars.length} className="star empty">&#9734;</span>);
    }
    return stars;
  };

  return (
    <section className="star-ratings-section">
      <h2>⭐ Member Ratings Snapshot</h2>
      <div className="average-rating">
        <div className="average-score">{averageRating.toFixed(1)}/5</div>
        <div className="stars">{renderStars(averageRating)}</div>
        <div className="total-reviews">Over {totalReviews} verified reviews</div>
      </div>
      <div className="category-breakdown">
        {categories.map((cat) => (
          <div key={cat.name} className="category-rating">
            <div className="category-name">{cat.name}</div>
            <div className="category-stars">{renderStars(cat.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StarRatings;
