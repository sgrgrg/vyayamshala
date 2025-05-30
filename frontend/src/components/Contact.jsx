import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Let’s begin your transformation journey together.</p>
      </header>

      <section className="contact-details">
        {[
          { label: 'Address', value: 'Lakeside 15th Street, Pokhara, Nepal 📍' },
          { label: 'Phone', value: '+977-61-467701 ☎️' },
          { label: 'Email', value: 'info@vyayamshala.com ✉️' },
          { label: 'Opening Hours', value: 'Mon–Sun: 6AM–9PM 🕒' },
        ].map(({ label, value }) => (
          <div className="detail-item" key={label}>
            <h3>{label}</h3>
            <p>{value}</p>
          </div>
        ))}
      </section>

      <section className="form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      <section className="extras-section">
        <div className="map-wrapper">
          <iframe
            title="Vyayamshala Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d83.972123456789!3d28.209123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399596f123456789%3A0xabcdef1234567890!2sVyayamshala!5e0!3m2!1sen!2snp!4v1234567890123"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/vyayamshala" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.instagram.com/vyayamshala" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com/vyayamshala" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
