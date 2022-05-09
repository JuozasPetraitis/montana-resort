import React from 'react';

//! ICONS
import { HiOutlineWifi, HiOutlineBookOpen } from 'react-icons/hi';

import { MdOutlineRestaurantMenu, MdOutlinePool, MdOutlineSpa, MdOutlineSupportAgent } from 'react-icons/md';

//! Which hotel services is provided
const serviceInfo = [
  [<HiOutlineWifi className="text-7xl text-yellow-400 opacity-80" />, 'Free Wifi'],
  [<HiOutlineBookOpen className="text-7xl text-yellow-400 opacity-80" />, 'Easy Booking'],
  [<MdOutlineRestaurantMenu className="text-7xl text-yellow-400 opacity-80" />, 'Restaurant'],
  [<MdOutlinePool className="text-7xl text-yellow-400 opacity-80" />, 'Swimming Pool'],
  [<MdOutlineSpa className="text-7xl text-yellow-400 opacity-80" />, 'Beauty & Health'],
  [<MdOutlineSupportAgent className="text-7xl text-yellow-400 opacity-80" />, 'Help & Support'],
];

//! Main Return
const ServicesSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-8 py-20">
      <p className="text-5xl text-center font-medium">Our Services</p>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap lg:gap-4 lg:flex-nowrap">
        {serviceInfo.map((item, index) => (
          <div className="flex flex-col gap-2 pt-2 pb-4 justify-center items-center md:w-1/2 lg:w-1/6 lg:rounded-t-full lg:rounded-br-full lg:px-8" key={index}>
            {item[0]}

            <p className="font-semibold">{item[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
