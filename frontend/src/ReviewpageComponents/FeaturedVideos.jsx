import React from 'react';
import '../css/ReviewpageComponents/FeaturedVideos.css';

const FeaturedVideos = () => {
  // Placeholder video data
  const videos = [
    {
      id: 1,
      title: 'Weight Loss Journey',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      memberName: 'John D.',
    },
    {
      id: 2,
      title: 'Strength Gains',
      src: 'https://www.youtube.com/embed/oHg5SJYRHA0',
      memberName: 'Sarah K.',
    },
    {
      id: 3,
      title: 'Mental Wellness through Yoga',
      src: 'https://www.youtube.com/embed/3GwjfUFyY6M',
      memberName: 'Emily R.',
    },
  ];

  return (
    <section className="featured-videos-section">
      <h2>🎥 Featured Video Testimonials</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="320"
              height="180"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-member-name">{video.memberName}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">Share Your Story</button>
    </section>
  );
};

export default FeaturedVideos;
