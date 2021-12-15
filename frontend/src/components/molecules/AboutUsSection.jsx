import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import HotelArea from '../../assets/images/Area.jpg';
import PoolArea from '../../assets/images/Thumbnail.jpg';

//! Main Component
const AboutUsSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-8 px-1 py-8">
      <p className="text-3xl text-center text-gray-700">About us</p>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 lg:w-2/5">
          <p className="text-2xl text-gray-700">A Luxurious Hotel with Nature</p>
          <p className="font-light text-gray-500">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim
            ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus
            lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
          <Link to="/about">
            <p className="text-lg border-b inline-block">Learn More</p>
          </Link>
        </div>

        <div className="flex lg:w-3/5 px-0.5">
          <div className="w-1/2 h-80 pb-8 mr-2 lg:h-112">
            <img className="w-full h-full object-cover" src={HotelArea} alt="Pool" />
          </div>
          <div className="w-1/2 h-80 pt-8 lg:h-112 lg:ml-5">
            <img className="w-full h-full object-cover" src={PoolArea} alt="Pool Chairs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
