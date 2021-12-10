import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';
import BlogSection from '../components/molecules/BlogSection';

//! Main Component
const BlogPage = () => {
  return (
    <div>
      <HeroSection sendMeStyle={{ image: 'Blog' }} />
      <BlogSection />
    </div>
  );
};

export default BlogPage;
