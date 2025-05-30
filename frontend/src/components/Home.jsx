import React, { useState, useEffect } from 'react';

import LandingPage from '../HomepageComponents/landingpage';
import ServicePage from '../HomepageComponents/service';
import ReviewPage from '../HomepageComponents/review';
import Facilities from '../HomepageComponents/facilities';
import Trainer from '../HomepageComponents/trainer';
import Connect from '../HomepageComponents/connect';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Approximate animation completion time based on AOS duration and delays
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const interactionDisabled = !(videoLoaded && animationComplete);

  return (
    <div style={{ pointerEvents: interactionDisabled ? 'none' : 'auto', opacity: interactionDisabled ? 0.5 : 1 }}>
      <div>
        <LandingPage onVideoLoaded={handleVideoLoaded} />
      </div>
      <div>
        <ServicePage />
      </div>
      <div>
        <ReviewPage />
      </div>
      <div>
        <Facilities />
      </div>
      <div>
        <Trainer />
      </div>
      <div>
        <Connect />
      </div>
    </div>
  );
};

export default Home;
