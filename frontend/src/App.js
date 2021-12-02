import React from 'react';
import { Routes, Route } from 'react-router-dom';

//! Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import AboutPage from './pages/AboutPage';

//! Components
import Footer from './components/organisms/Footer';

//! Main Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
