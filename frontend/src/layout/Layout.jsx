import React from 'react';
import { Outlet } from 'react-router-dom';

//! Components
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

//! Main Component
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
