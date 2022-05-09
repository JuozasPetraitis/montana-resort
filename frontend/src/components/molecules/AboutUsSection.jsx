import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import HotelArea from '../../assets/images/Area.jpg';
import PoolArea from '../../assets/images/Thumbnail.jpg';

//! Main Component
const AboutUsSection = () => {
  return (
    <div className="container m-auto bg-gray-50 py-20">
      <p className="text-5xl text-center font-medium">About us</p>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center py-10">
        <div className="flex flex-col gap-8 lg:w-2/5 px-8">
          <p className="text-3xl text-gray-700">A Luxurious Hotel with Nature</p>
          <p className="break-all">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin
            pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
          <Link to="/about" className="group">
            <p className="border-b-4 border-blue-600 inline-block group-hover:tracking-wider font-medium">Learn More</p>
          </Link>
        </div>

        <div className="flex lg:w-3/5 px-8">
          <div className="w-1/2 h-60 pb-8 mr-2 lg:h-96">
            <img className="w-full h-full object-cover md:rounded-sm" src={HotelArea} alt="Pool" />
          </div>
          <div className="w-1/2 h-60 pt-8 lg:h-96 lg:ml-5">
            <img className="w-full h-full object-cover md:rounded-sm" src={PoolArea} alt="Pool Chairs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
