import React from 'react';
import '../css/ServicepageComponents/ScheduleBooking.css';

const ScheduleBooking = () => {
  return (
    <section className="schedule-booking">
      <h2>Start Anytime. Book a Session Today.</h2>
      <p>Check available slots for group classes, yoga, massage therapy, or trainer consultations.</p>
      <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="service">Select Service:</label>
        <select id="service" name="service" required>
          <option value="">--Choose a service--</option>
          <option value="group-classes">Group Classes</option>
          <option value="yoga-sessions">Yoga Sessions</option>
          <option value="massage-therapy">Massage Therapy</option>
          <option value="trainer-consultation">Trainer Consultation</option>
        </select>

        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" name="time" required />

        <button type="submit" className="btn book-now">Book Now</button>
      </form>
    </section>
  );
};

export default ScheduleBooking;
