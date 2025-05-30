import React from 'react';
import TitleIntro from '../ReviewpageComponents/TitleIntro';
import FeaturedVideos from '../ReviewpageComponents/FeaturedVideos';
import StarRatings from '../ReviewpageComponents/StarRatings';
import WrittenTestimonials from '../ReviewpageComponents/WrittenTestimonials';
import BeforeAfterTransformations from '../ReviewpageComponents/BeforeAfterTransformations';
import LeaveReviewForm from '../ReviewpageComponents/LeaveReviewForm';
import CallToAction from '../ReviewpageComponents/CallToAction';



const ReviewPage = () => {
  return (
    <div className="review-page">
      <TitleIntro />
      <FeaturedVideos />
      <StarRatings />
      <WrittenTestimonials />
      <BeforeAfterTransformations />
  
      <LeaveReviewForm />
      <CallToAction />
    </div>
  );
};

export default ReviewPage;
