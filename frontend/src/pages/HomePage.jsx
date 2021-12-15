import React from 'react';

//! Components
import AboutUsSection from '../components/molecules/AboutUsSection';
import OurOffersSection from '../components/molecules/OurOffersSection';
import FoodSection from '../components/molecules/FoodSection';
import RoomsSection from '../components/molecules/RoomsSection';
import GallerySection from '../components/molecules/GallerySection';

//! Main Component
const HomePage = () => {
  return (
    <>
      <AboutUsSection />
      <OurOffersSection />
      <FoodSection />
      <RoomsSection />
      <GallerySection />
    </>
  );
};

export default HomePage;
