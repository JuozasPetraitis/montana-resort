import React from 'react';

//! Components
import Carousel from '../components/molecules/Carousel';
import AboutUsSection from '../components/molecules/AboutUsSection';
import OurOffersSection from '../components/molecules/OurOffersSection';
import FoodSection from '../components/molecules/FoodSection';
import FeaturedRooms from '../components/molecules/FeaturedRooms';
import ReservationSection from '../components/molecules/ReservationSection';
import GallerySection from '../components/molecules/GallerySection';

//! Main Component
const HomePage = () => {
  return (
    <>
      {/* <Carousel /> */}
      <AboutUsSection />
      <OurOffersSection />
      <FoodSection />
      <FeaturedRooms />
      <ReservationSection />
      <GallerySection />
    </>
  );
};

export default HomePage;
