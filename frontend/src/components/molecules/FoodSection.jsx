import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import Food1 from '../../assets/images/Food1.jpg';
import Food2 from '../../assets/images/Food2.jpg';

//! Main Component
const FoodSection = () => {
  return (
    <div className="container m-auto bg-gray-50">
      <div className="flex flex-col gap-8 lg:items-center py-10">
        <p className="text-5xl text-center font-medium">Restaurant & Bar</p>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-8 lg:w-2/5 lg:order-1 px-8">
            <p className="text-3xl text-gray-700">We Serve Fresh and Delicious Food</p>
            <p className="break-all">
              Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim
              ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus
              lorem feugiat facilisi faucibus et. Rhoncus.
            </p>
            <Link to="/about" className="group">
              <p className="border-b-4 border-blue-600 inline-block group-hover:tracking-wider font-medium">
                Learn More
              </p>
            </Link>
          </div>

          <div className="flex lg:w-3/5 lg:order-0 px-8 lg:pr-0">
            <div className="w-1/2 h-60 pb-8 mr-2 lg:h-96">
              <img className="w-full h-full object-cover" src={Food1} alt="Salads" />
            </div>
            <div className="w-1/2 h-60 pt-8 lg:h-96 lg:ml-5">
              <img className="w-full h-full object-cover" src={Food2} alt="Cake" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
