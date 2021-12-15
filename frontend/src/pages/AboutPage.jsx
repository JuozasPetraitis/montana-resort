import React from 'react';

//! Components
import AboutUsSection from '../components/molecules/AboutUsSection';
import GallerySection from '../components/molecules/GallerySection';
import AboutUsDescription from '../components/molecules/AboutUsDescription';
import ServicesSection from '../components/molecules/ServicesSection';

//! Main Component
const AboutPage = () => {
  return (
    <>
      <AboutUsSection />
      <AboutUsDescription />
      <ServicesSection />
      <GallerySection />
    </>
  );
};

export default AboutPage;
