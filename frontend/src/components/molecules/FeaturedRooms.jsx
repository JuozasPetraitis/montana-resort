import React from 'react';

//! CSS
//! IMG
import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Offer2.jpg';
import Offer3 from '../../assets/images/Offer3.jpg';

const FeaturedRoomsInformation = [
  {
    title: 'Suite Room',
    price: '$450/NIGHT',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer1,
  },
  {
    title: 'Family Room',
    price: '$450/NIGHT',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer2,
  },
  {
    title: 'Deluxe Room',
    price: '$450/NIGHT',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: Offer3,
  },
];

//! Main Component
const FeaturedRooms = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl m-auto text-center">
        <p className="mb-4 text-sm text-blue-500">Our Rooms</p>
        <p className="mb-4 text-3xl text-gray-700">Featured Rooms</p>
      </div>

      <div className="flex flex-col md:flex-row">
        {FeaturedRoomsInformation.map((i) => (
          <div className="py-1 px-0.5">
            <div className="h-80 mb-6 ">
              <img className="w-full h-full object-cover" src={i.image} alt={i.title} />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-3xl text-gray-700 text-center">{i.title}</p>

              <p className="text-sm text-gray-500 px-2">{i.description}</p>

              <button className="block w-1/2 m-auto py-2 px-12 border rounded-sm border-blue-500">Book a room</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
