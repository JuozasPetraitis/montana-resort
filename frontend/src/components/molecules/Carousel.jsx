import React, { useRef } from 'react';
import PropTypes from 'prop-types';

//! ICONS
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';

//! IMG
import Carousel1 from '../../assets/images/Carousel1.jpg';
import Carousel2 from '../../assets/images/Offer1.jpg';
import Carousel3 from '../../assets/images/Carousel3.jpg';

//! Main Component
const Carousel = (props) => {
  const Carousel1Ref = useRef();
  const Carousel2Ref = useRef();

  const makeItWork = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <IoIosArrowDropleftCircle className="text-7xl absolute top-1/2 hidden lg:block z-10" />

      <div className="h-screen z-20" onClick={(e) => makeItWork(e)} ref={Carousel1Ref}>
        <div className="h-full">
          <img className="w-full h-full object-cover opacity-90" src={Carousel1} alt="" />
        </div>

        <div className="w-4/5 absolute transform top-1/2 -translate-y-2/4 left-2/4 -translate-x-2/4 text-center">
          <p className="text-3xl tracking-widest capitalize font-normal text-white text-center">Life is Beautiful</p>
          <p className="text-base text-white text-center">Unlock to enjoy the best views of Maldives</p>
        </div>
      </div>

      <div className="h-screen relative hidden" onClick={(e) => makeItWork(e)} ref={Carousel2Ref}>
        <img className="w-full h-full object-cover opacity-90" src={Carousel2} alt="" />
        <div className="w-4/5 absolute transform top-1/2 -translate-y-2/4 left-2/4 -translate-x-2/4 text-center">
          <p className="text-3xl tracking-widest capitalize font-normal text-white text-center">Montana Resort</p>
          <p className="text-base text-white text-center">Unlock to enjoy the best views of Maldives</p>
        </div>
      </div>

      <IoIosArrowDroprightCircle className="text-7xl absolute top-1/2 right-px hidden lg:block z-10" />
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
