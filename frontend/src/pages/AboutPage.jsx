import React from 'react';

//! Components
import AboutUsSection from '../components/molecules/AboutUsSection';
import GallerySection from '../components/molecules/GallerySection';
import HeroSection from '../components/molecules/HeroSection';
import ReservationSection from '../components/molecules/ReservationSection';
import AboutUsDescription from '../components/molecules/AboutUsDescription';

//! Main Component
const AboutPage = () => {
  return (
    <>
      <HeroSection sendMeStyle={{ image: 'About' }} />
      <AboutUsSection />
      <AboutUsDescription />
      <ReservationSection />
      <GallerySection />
    </>
  );
};

export default AboutPage;
