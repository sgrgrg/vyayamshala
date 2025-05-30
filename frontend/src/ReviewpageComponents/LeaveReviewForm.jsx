import React, { useState } from 'react';
import '../css/ReviewpageComponents/LeaveReviewForm.css';

const LeaveReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: '',
    photo: null,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for sharing your experience!');
    setFormData({
      name: '',
      email: '',
      rating: 0,
      comment: '',
      photo: null,
      consent: false,
    });
  };

  return (
    <section className="leave-review-section">
      <h2>✍️ Leave a Review</h2>
      <p>Have you had a great experience with us? We’d love to hear from you!</p>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          Name<span className="required">*</span>:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email (optional):
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Star Rating<span className="required">*</span>:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value={0}>Select rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </label>
        <label>
          Comment/Testimonial<span className="required">*</span>:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload a photo (optional):
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <label className="consent-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          I agree to have my testimonial published.
        </label>
        <button type="submit" className="submit-button">
          Share My Experience
        </button>
      </form>
    </section>
  );
};

export default LeaveReviewForm;
