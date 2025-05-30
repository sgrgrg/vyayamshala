import React from 'react';
import HeroSection from '../ServicepageComponents/HeroSection';
import ServiceCategories from '../ServicepageComponents/ServiceCategories';
import ServiceDetails from '../ServicepageComponents/ServiceDetails';
import ScheduleBooking from '../ServicepageComponents/ScheduleBooking';
import PricingPlans from '../ServicepageComponents/PricingPlans';

import Gallery from '../ServicepageComponents/Gallery';

const Service = () => {
  return (
    <>
      <HeroSection />
      <ServiceCategories />
      <ServiceDetails />
      <ScheduleBooking />
      <PricingPlans />

      <Gallery />
    </>
  );
};

export default Service;
