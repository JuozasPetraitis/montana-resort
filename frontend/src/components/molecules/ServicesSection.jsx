import React from 'react';

//! ICONS
import { HiOutlineWifi, HiOutlineBookOpen } from 'react-icons/hi';

import { MdOutlineRestaurantMenu, MdOutlinePool, MdOutlineSpa, MdOutlineSupportAgent } from 'react-icons/md';

//! Which hotel services is provided
const serviceInfo = [
  [<HiOutlineWifi className="text-7xl text-yellow-400 opacity-60" />, 'Free Wifi'],
  [<HiOutlineBookOpen className="text-7xl text-yellow-400 opacity-60" />, 'Easy Booking'],
  [<MdOutlineRestaurantMenu className="text-7xl text-yellow-400 opacity-60" />, 'Restaurant'],
  [<MdOutlinePool className="text-7xl text-yellow-400 opacity-60" />, 'Swimming Pool'],
  [<MdOutlineSpa className="text-7xl text-yellow-400 opacity-60" />, 'Beauty & Health'],
  [<MdOutlineSupportAgent className="text-7xl text-yellow-400 opacity-60" />, 'Help & Support'],
];

//! Main Return
const ServicesSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-8">
      <p className="text-3xl text-center text-gray-700">Our Services</p>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap lg:gap-4 lg:flex-nowrap">
        {serviceInfo.map((item) => (
          <div className="flex flex-col gap-2 pt-2 pb-4 justify-center items-center md:w-1/2 lg:w-1/6 lg:rounded-t-full lg:rounded-br-full lg:px-8">
            {item[0]}
            <p className="text-xl font-medium text-center">{item[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
