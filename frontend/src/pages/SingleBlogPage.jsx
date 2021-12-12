import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';
import SingleBlog from '../components/molecules/SingleBlog';

//! Main Component
const SingleBlogPage = () => {
  return (
    <>
      <HeroSection sendMeStyle={{ image: 'Room' }} />
      <SingleBlog />
    </>
  );
};

export default SingleBlogPage;
