import React from 'react';

//! CSS
//! IMG
import Offer1 from '../../assets/images/Offer1.jpg';
import Offer2 from '../../assets/images/Offer2.jpg';
import Offer3 from '../../assets/images/Offer3.jpg';

//! Main Component
const OurOffersSection = () => {
  const OffersData = {
    Offer1: [
      Offer1,
      'Up to 35% savings on Club rooms and Suites',
      'Luxuries condition',
      '3 Adults & 2 Children size',
      'Sea view side',
    ],
    Offer2: [
      Offer2,
      'Up to 35% savings on Club rooms and Suites',
      'Luxuries condition',
      '3 Adults & 2 Children size',
      'Sea view side',
    ],
    Offer3: [
      Offer3,
      'Up to 35% savings on Club rooms and Suites',
      'Luxuries condition',
      '3 Adults & 2 Children size',
      'Sea view side',
    ],
  };

  return (
    <div className="max-w-7xl m-auto px-4 py-20 md:px-8 flex flex-col">
      <p className="mb-4 text-sm text-blue-500">Our Offers</p>

      <p className="mb-8 text-3xl text-center text-gray-700">Ongoing Offers</p>

      <div className="md:flex md:gap-8 md:my-10">
        <div className="mb-8">
          <div className="mb-4 h-80 md:h-56">
            <img className="w-full h-full object-cover" src={OffersData.Offer1[0]} alt="Vila" />
          </div>

          <p className="mb-2 text-2xl md:text-lg font-medium text-gray-700">{OffersData.Offer1[1]}</p>

          <ul className="mb-6 list-disc list-inside text-gray-600">
            <li>{OffersData.Offer1[2]}</li>
            <li>{OffersData.Offer1[3]}</li>
            <li>{OffersData.Offer1[4]}</li>
          </ul>

          <div className="flex justify-center">
            <button className="py-2 px-12 border rounded-sm border-blue-500">Book now</button>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 h-80 md:h-56">
            <img className="w-full h-full object-cover" src={OffersData.Offer2[0]} alt="Vila" />
          </div>

          <p className="mb-2 text-2xl md:text-lg font-medium text-gray-700">{OffersData.Offer2[1]}</p>

          <ul className="mb-6 list-disc list-inside text-gray-600">
            <li>{OffersData.Offer2[2]}</li>
            <li>{OffersData.Offer2[3]}</li>
            <li>{OffersData.Offer2[4]}</li>
          </ul>

          <div className="flex justify-center">
            <button className="py-2 px-12 border rounded-sm border-blue-500">Book now</button>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 h-80 md:h-56">
            <img className="w-full h-full object-cover" src={OffersData.Offer3[0]} alt="Vila" />
          </div>

          <p className="mb-2 text-2xl md:text-lg font-medium text-gray-700">{OffersData.Offer3[1]}</p>

          <ul className="mb-6 list-disc list-inside text-gray-600">
            <li>{OffersData.Offer3[2]}</li>
            <li>{OffersData.Offer3[3]}</li>
            <li>{OffersData.Offer3[4]}</li>
          </ul>

          <div className="flex justify-center">
            <button className="py-2 px-12 border rounded-sm border-blue-500">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffersSection;
