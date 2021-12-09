import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';

//! Main Component
const BlogPage = () => {
  return (
    <div>
      <HeroSection sendMeStyle={{ image: 'Blog' }} />
    </div>
  );
};

export default BlogPage;
