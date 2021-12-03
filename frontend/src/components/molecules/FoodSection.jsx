import React from 'react';
import { Link } from 'react-router-dom';

//! CSS
//! IMG
import Food1 from '../../assets/images/Food1.jpg';
import Food2 from '../../assets/images/Food2.jpg';

//! Main Component
const FoodSection = () => {
  return (
    <div className="max-w-7xl m-auto px-4 py-20 md:px-8 flex flex-col">
      <div className="lg:flex">
        <div className="flex m-auto lg:w-3/5 mr-5">
          <div className="w-1/2 h-60 pb-8 mr-2 md:h-80 lg:h-500px">
            <img className="w-full h-full object-cover" src={Food1} alt="Salads" />
          </div>
          <div className="w-1/2 h-60 pt-8 md:h-80 lg:ml-5">
            <img className="w-full h-full object-cover" src={Food2} alt="Cake" />
          </div>
        </div>

        <div className="lg:w-2/5">
          <p className="mb-4 text-sm text-blue-500">Delicious Food</p>
          <p className="mb-4 text-3xl text-gray-700">We Serve Fresh and Delicious Food</p>
          <p className="mb-4 font-light text-gray-500">
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim
            ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus
            lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
          <Link to="/">
            <p className="mb-8 text-lg border-b inline-block">Learn More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
