import React from 'react';

//! IMG
import HomeImage from '../../assets/images/Hero.jpg';
import RoomImage from '../../assets/images/Thumbnail.jpg';
import AboutImage from '../../assets/images/Gallery3.jpg';
import BlogImage from '../../assets/images/Gallery2.jpg';
import ContactsImage from '../../assets/images/Contact2.jpg';

//! Main Component
const HeroSection = ({ sendMeStyle, IsIt }) => {
  const { image } = sendMeStyle;
  let Image;

  switch (image) {
    case 'Home':
      Image = HomeImage;
      break;
    case 'Room':
      Image = RoomImage;
      break;
    case 'About':
      Image = AboutImage;
      break;
    case 'Blog':
      Image = BlogImage;
      break;
    case 'Contacts':
      Image = ContactsImage;
      break;
    default:
      break;
  }

  return (
    <div className="h-screen relative">
      <div className="h-full">
        <img className="w-full h-full object-cover opacity-70" src={Image} alt="" />
      </div>

      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
        {IsIt ? (
          <>
            <p className="text-4xl tracking-widest capitalize font-normal text-white text-center">Life is Beautiful</p>
            <p className="text-2xl text-white text-center">Unlock to enjoy the best views of Maldives</p>
          </>
        ) : (
          <>
            <p className="text-4xl tracking-widest capitalize font-normal text-white text-center">Life is Beautiful</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
