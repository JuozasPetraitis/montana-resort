import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';
import OurOffersSection from '../components/molecules/OurOffersSection';
import FeaturedRooms from '../components/molecules/FeaturedRooms';
import ReservationSection from '../components/molecules/ReservationSection';
import GallerySection from '../components/molecules/GallerySection';

//! Main Component
const RoomsPage = () => {
  return (
    <>
      <HeroSection sendMeStyle={{ image: 'Room' }} />
      <OurOffersSection />
      <FeaturedRooms />
      <ReservationSection />
      <GallerySection />
    </>
  );
};

export default RoomsPage;
