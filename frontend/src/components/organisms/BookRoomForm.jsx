import React, { useState, useRef } from 'react';

import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Offer2.jpg';
import Offer3 from '../../assets/images/Offer3.jpg';

//! Room Information
const RoomsInformation = [
  {
    id: 1,
    title: 'Suite Room',
    price: '$750/Night',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer1,
  },
  {
    id: 2,
    title: 'Family Room',
    price: '$250/Night',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer2,
  },
  {
    id: 3,
    title: 'Deluxe Room',
    price: '$500/Night',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer3,
  },
];

//! Main Component
const BookRoomForm = () => {
  //! Hooks
  const firstStep = useRef();
  const secondStep = useRef();
  const thirdStep = useRef();

  const clickHandler = (e) => {};

  //! Main Return
  return (
    <div className="bg-black w-full h-3/4 text-white flex flex-col justify-around">
      <p className="text-3xl text-center">Checkout</p>
      <div ref={firstStep}>
        {RoomsInformation.map((item) => (
          <div className="flex justify-between items-center" key={item.id}>
            <div className="h-40 w-60">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-extrabold">{item.title}</p>
              <p className="font-bold text-indigo-400">{item.price}</p>
            </div>

            <button onClick={clickHandler} className="px-4 py-2 bg-green-600 font-semibold rounded-sm">
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-4xl font-bold text-center hidden" ref={secondStep}>
        Pick date
      </div>

      <div className="hidden" ref={thirdStep}>
        Create log in and password
      </div>

      <div className="flex justify-center">
        <span className="h-8 w-8 bg-gray-400 mx-0.5 inline-block rounded-full"></span>
        <span className="h-8 w-8 bg-gray-400 mx-0.5 inline-block rounded-full"></span>
        <span className="h-8 w-8 bg-gray-400 mx-0.5 inline-block rounded-full"></span>
      </div>
    </div>
  );
};

export default BookRoomForm;
