import React from 'react';
import '../css/ServicepageComponents/ServiceCategories.css';
import { FaDumbbell, FaUsers, FaLeaf, FaSpa, FaRunning, FaHeartbeat } from 'react-icons/fa';

const services = [
  {
    title: 'Personal Training',
    icon: <FaDumbbell />,
    summary: 'One-on-one attention from certified fitness coaches.',
    link: '#personal-training',
  },
  {
    title: 'Group Classes',
    icon: <FaUsers />,
    summary: 'Dynamic sessions for motivation, fun, and community.',
    link: '#group-classes',
  },
  {
    title: 'Nutrition Plans',
    icon: <FaLeaf />,
    summary: 'Customized diet strategies to complement your workouts.',
    link: '#nutrition-plans',
  },
  {
    title: 'Wellness Coaching',
    icon: <FaHeartbeat />,
    summary: 'Guidance on sleep, stress, lifestyle, and recovery.',
    link: '#wellness-coaching',
  },
  {
    title: 'Massage Therapy',
    icon: <FaSpa />,
    summary: 'Relieve sore muscles and promote recovery.',
    link: '#massage-therapy',
  },
  {
    title: 'Yoga Sessions',
    icon: <FaRunning />,
    summary: 'Flexibility, mindfulness, and inner peace.',
    link: '#yoga-sessions',
  },
];

const ServiceCategories = () => {
  return (
    <section className="service-categories">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map(({ title, icon, summary, link }) => (
          <div key={title} className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{summary}</p>
            <a href={link} className="learn-more">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCategories;
