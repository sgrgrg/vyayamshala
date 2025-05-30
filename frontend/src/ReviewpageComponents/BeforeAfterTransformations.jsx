import React from 'react';
import '../css/ReviewpageComponents/BeforeAfterTransformations.css';

const transformations = [
  {
    id: 1,
    before: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    after: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    caption: '6 months. 10kg down. Stronger than ever.',
    memberSince: 'Member since 2022',
  },
  {
    id: 2,
    before: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    after: 'https://www.gravatar.com/avatar/?d=mp&s=128',
    caption: '12 weeks. Lost 8kg. Feeling great!',
    memberSince: 'Member since 2023',
  },
];

const BeforeAfterTransformations = () => {
  return (
    <section className="before-after-section">
      <h2>🧍 Before & After Transformations</h2>
      <div className="transformations-gallery">
        {transformations.map((t) => (
          <div key={t.id} className="transformation-card">
            <div className="photos1">
              <div className="photo1 before">
                <img src={t.before} alt="Before transformation" />
                <span className="label">Before</span>
              </div>
              <div className="photo1 after">
                <img src={t.after} alt="After transformation" />
                <span className="label">After</span>
              </div>
            </div>
            <p className="caption">{t.caption}</p>
            <p className="member-since">{t.memberSince}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterTransformations;
