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
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  ',
    image: Offer1,
  },
  {
    title: 'Family Room',
    price: '$450/NIGHT',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ',
    image: Offer2,
  },
  {
    title: 'Deluxe Room',
    price: '$450/NIGHT',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ',
    image: Offer3,
  },
];

//! Main Component
const FeaturedRooms = () => {
  return (
    <div className="container m-auto">
      <div className="flex flex-col items-center gap-10 py-10">
        <p className="text-5xl text-center font-medium">Our Rooms</p>

        <div className="flex flex-col gap-10 md:flex-row md:gap-2">
          {RoomsInformation.map((item) => (
            <div className="flex flex-col gap-4 md:gap-2" key={Math.random()}>
              <div className="md:h-72">
                <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
              </div>

              <p className="text-2xl font-medium text-center">{item.title}</p>
              <p className="px-4 break-all">{item.description}</p>

              <button className="py-2 px-12 border rounded-sm border-blue-400 text-blue-800 font-semibold self-center hover:tracking-wider mt-4">
                Book a room
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
