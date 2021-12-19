import React from 'react';

//! CSS
//! IMG
import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Offer2.jpg';
import Offer3 from '../../assets/images/Offer3.jpg';

const RoomsInformation = [
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
    <div className="container m-auto flex flex-col gap-8 px-0.5 py-8">
      <p className="mb-8 text-3xl text-center text-gray-700">Our Rooms</p>

      <div className="flex flex-col gap-8 md:flex-row md:gap-2">
        {RoomsInformation.map((item) => (
          <div className="flex flex-col gap-4 lg:w-1/3" key={Math.random()}>
            <div className="h-56 lg:h-80">
              <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
            </div>

            <p className="text-2xl text-gray-700 text-center">{item.title}</p>
            <p className="text-sm text-gray-500">{item.description}</p>

            <button className="py-2 border rounded-sm border-blue-300 text-blue-300">Book a room</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;