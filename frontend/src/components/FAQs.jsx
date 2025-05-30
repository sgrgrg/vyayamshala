import React from "react";
import "../css/HomepageComponents/FAQs.css";

const FAQs = () => {
  return (
    <section id="faqs" className="faqs-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What are the operating hours?</h3>
        <p>We are open from 6 AM to 10 PM every day.</p>
      </div>
      <div className="faq-item">
        <h3>Do you offer personal training?</h3>
        <p>Yes, we offer personal training sessions tailored to your needs.</p>
      </div>
      <div className="faq-item">
        <h3>How can I join the gym?</h3>
        <p>You can join by filling out the membership form on our website or visiting us in person.</p>
      </div>
      <div className="faq-item">
        <h3>Are there any membership discounts?</h3>
        <p>We offer seasonal discounts and special offers. Please contact us for current promotions.</p>
      </div>
    </section>
  );
};

export default FAQs;
