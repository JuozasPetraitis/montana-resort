import React from 'react';
import Slide from 'react-reveal/Slide';

//! CSS
//! IMG
import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Gallery2.jpg';
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
    <div className="container m-auto">
      <Slide right>
        <div className="flex flex-col items-center gap-10 py-10">
          <p className="text-5xl text-center font-medium">Ongoing Offers</p>

          <div className="flex flex-col gap-10 md:flex-row  md:gap-2">
            {OffersData.map((item) => (
              <div className="flex flex-col gap-4 md:gap-2" key={Math.random()}>
                <div className="md:h-72">
                  <img className="w-full h-full object-cover rounded-sm" src={item[0]} alt="Vila" />
                </div>

                <div className="flex flex-col gap-4 px-4 md:justify-between">
                  <p className="text-2xl font-medium">{item[1]}</p>

                  <ul className="list-disc list-inside">
                    <li>{item[2]}</li>
                    <li>{item[3]}</li>
                    <li>{item[4]}</li>
                  </ul>

                  <button className="py-2 px-12 border rounded-sm border-blue-400 text-blue-800 font-semibold self-center hover:tracking-wider">
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default OurOffersSection;
