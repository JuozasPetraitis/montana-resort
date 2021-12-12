import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//! Pages
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import RoomsPage from '../pages/RoomsPage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import SingleBlogPage from '../pages/SingleBlogPage';
import ContactsPage from '../pages/ContactsPage';

//! Main Component
const Router = () => {
  //! Hooks
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //! Main return
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
