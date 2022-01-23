import React from 'react';
import Slide from 'react-reveal/Slide';

//! CSS
//! IMG
import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Offer2.jpg';
import Offer3 from '../../assets/images/Offer3.jpg';

const OffersData = [
  [
    Offer1,
    'Up to 35% savings on Club rooms and Suites',
    'Luxuries condition',
    '3 Adults & 2 Children size',
    'Sea view side',
  ],
  [
    Offer2,
    'Up to 35% savings on Club rooms and Suites',
    'Luxuries condition',
    '3 Adults & 2 Children size',
    'Sea view side',
  ],
  [
    Offer3,
    'Up to 35% savings on Club rooms and Suites',
    'Luxuries condition',
    '3 Adults & 2 Children size',
    'Sea view side',
  ],
];

//! Main Component
const OurOffersSection = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 px-0.5 py-20">
      <Slide right>
        <p className="mb-8 text-3xl text-center text-gray-700">Ongoing Offers</p>

        <div className="flex flex-col gap-8 md:flex-row md:gap-2">
          {OffersData.map((item) => (
            <div className="flex flex-col gap-4 lg:w-1/3" key={Math.random()}>
              <div className="h-56 lg:h-60 lg:px-8">
                <img className="w-full h-full object-cover rounded-sm" src={item[0]} alt="Vila" />
              </div>

              <p className="text-xl lg:text-2xl text-gray-700">{item[1]}</p>

              <ul className="list-disc list-inside text-gray-500 pb-4">
                <li>{item[2]}</li>
                <li>{item[3]}</li>
                <li>{item[4]}</li>
              </ul>

              <button className="w-3/12 m-auto py-2 border rounded-sm border-blue-400 text-blue-600">Book now</button>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default OurOffersSection;
