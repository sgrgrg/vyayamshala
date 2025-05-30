import React from 'react';
import '../css/ServicepageComponents/PricingPlans.css';

const plans = [
  {
    name: 'Starter',
    price: '$29/month',
    features: ['Basic access to gym', '1 group class per week', 'Email support'],
    idealFor: 'Beginners',
    badge: '',
  },
  {
    name: 'Standard',
    price: '$49/month',
    features: ['Unlimited gym access', '3 group classes per week', 'Nutrition consultation'],
    idealFor: 'Intermediates',
    badge: 'Popular',
  },
  {
    name: 'Premium',
    price: '$79/month',
    features: ['All Standard features', 'Personal training sessions', 'Wellness coaching'],
    idealFor: 'Advanced',
    badge: 'Best Value',
  },
  {
    name: 'Custom/Family Package',
    price: 'Contact us',
    features: ['Tailored plans', 'Family/group discounts', 'Flexible scheduling'],
    idealFor: 'Families',
    badge: '',
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-plans">
      <h2>Packages & Pricing Plans Preview</h2>
      <div className="plans-container">
        {plans.map(({ name, price, features, idealFor, badge }) => (
          <div key={name} className="plan-card">
            {badge && <div className="badge">{badge}</div>}
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <ul>
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="ideal-for">Ideal for {idealFor}</p>
            <button className="btn get-started">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
