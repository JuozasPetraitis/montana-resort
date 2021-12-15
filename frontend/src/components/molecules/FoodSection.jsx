import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import Food1 from '../../assets/images/Food1.jpg';
import Food2 from '../../assets/images/Food2.jpg';

//! Main Component
const FoodSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-8 px-0.5 py-8">
      <p className="text-3xl text-center text-gray-700">Restaurant & Bar</p>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 lg:w-2/5 lg:order-1">
          <p className="text-2xl text-gray-700">We Serve Fresh and Delicious Food</p>
          <p className="font-light text-gray-500">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim
            ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus
            lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
          <Link to="/about">
            <p className="text-lg border-b inline-block">Learn More</p>
          </Link>
        </div>

        <div className="flex lg:w-3/5 px-0.5 lg:order-0">
          <div className="w-1/2 h-80 pb-8 mr-2 lg:h-112">
            <img className="w-full h-full object-cover" src={Food1} alt="Salads" />
          </div>
          <div className="w-1/2 h-80 pt-8 lg:h-112 lg:ml-5">
            <img className="w-full h-full object-cover" src={Food2} alt="Cake" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
