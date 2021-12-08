import React from 'react';

//! IMG
import Hero from '../../assets/images/Hero.jpg';

//! Main Component
const HeroSection = () => {
  return (
    <div className="h-hero">
      <div className="h-full relative">
        <img className="w-full h-full object-cover opacity-80" src={Hero} alt="" />
      </div>

      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
        <p className="text-4xl tracking-widest capitalize font-normal text-white text-center">Life is Beautiful</p>
        <p className="text-2xl text-white text-center">Unlock to enjoy the best views of Maldives</p>
      </div>
    </div>
  );
};

export default HeroSection;
