import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import HotelArea from '../../assets/images/Area.jpg';
import PoolArea from '../../assets/images/Thumbnail.jpg';

//! Main Component
const AboutUsSection = () => {
  return (
    <div className="max-w-7xl m-auto px-4 py-20 md:px-8 flex flex-col">
      <p className="mb-4 text-sm text-blue-500">About us</p>
      <div className="lg:flex">
        <div className="lg:w-2/5">
          <p className="mb-4 text-3xl text-gray-700">A Luxurious Hotel with Nature</p>
          <p className="mb-4 font-light text-gray-500">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim
            ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus
            lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
          <Link to="/about">
            <p className="mb-8 text-lg border-b inline-block">Learn More</p>
          </Link>
        </div>

        <div className="flex m-auto lg:w-3/5 ml-5">
          <div className="w-1/2 h-60 pb-8 mr-2 md:h-80 lg:h-500px">
            <img className="w-full h-full object-cover" src={HotelArea} alt="Pool" />
          </div>
          <div className="w-1/2 h-60 pt-8 md:h-80 lg:ml-5">
            <img className="w-full h-full object-cover" src={PoolArea} alt="Pool Chairs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
