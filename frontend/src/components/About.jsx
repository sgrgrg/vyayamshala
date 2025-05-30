import React from 'react';
import HeroSection from '../AboutpageComponents/HeroSection';
import OurStory from '../AboutpageComponents/OurStory';
import PhilosophyValues from '../AboutpageComponents/PhilosophyValues';
import UniqueFeatures from '../AboutpageComponents/UniqueFeatures';
import MeetTheTeam from '../AboutpageComponents/MeetTheTeam';
import FacilitiesServices from '../AboutpageComponents/FacilitiesServices';
import JoinOurJourney from '../AboutpageComponents/JoinOurJourney';

const About = () => {
  return (
    <div>
      <HeroSection />
      <OurStory />
      <PhilosophyValues />
      <UniqueFeatures />
      <MeetTheTeam />
      <FacilitiesServices />
      <JoinOurJourney />
    </div>
  );
};

export default About;
