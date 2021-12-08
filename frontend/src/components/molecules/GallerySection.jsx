import React, { useState } from 'react';

//! ICONS
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';

//! IMG
import Gallery1 from '../../assets/images/Gallery1.jpg';
import Gallery2 from '../../assets/images/Gallery2.jpg';
import Gallery3 from '../../assets/images/Gallery3.jpg';
import Gallery4 from '../../assets/images/Gallery4.jpg';
import Gallery5 from '../../assets/images/Gallery5.jpg';
import Modal from '../organisms/Modal';

const GallerySection = () => {
  const Photos = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5];
  //! Hooks
  const [isOpen, setIsOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [dataIndex, setDataIndex] = useState(null);

  //! Functions
  const showGalleryInModal = (e) => {
    setIsOpen(true);
    setPhotoUrl(e.target.offsetParent.firstChild.getAttribute('src'));
    setDataIndex(e.target.dataset.index);
  };

  const makeItTwo = (target) => {
    let i = dataIndex;

    switch (target) {
      case 'left':
        if (i === 0) {
          setDataIndex(Photos.length - 1);
          setPhotoUrl(Photos[Photos.length - 1]);
          i = Photos.length - 1;
          return;
        }
        i--;
        setPhotoUrl(Photos[i]);
        setDataIndex(i);
        break;
      case 'right':
        if (i >= Photos.length - 1) {
          setDataIndex(0);
          setPhotoUrl(Photos[0]);
          i = 0;
          return;
        }
        i++;
        setPhotoUrl(Photos[i]);
        setDataIndex(i);

        break;
      default:
        console.log('Works');
    }
  };

  //! Return
  return (
    <>
      <div className="flex flex-wrap lg:flex-row lg:flex-nowrap pt-10">
        {Photos.map((i, index) => (
          <div className="relative h-80 w-full mx-0.5 mb-0.5 last:mb-0 md:w-1/2 md:m-0 group" key={index}>
            <img className="w-full h-full object-cover group-hover:opacity-30" src={i} alt="Gallery" />
            <div
              className="absolute w-full h-full top-0 flex justify-center items-center cursor-pointer"
              data-index={index}
              onClick={showGalleryInModal}
            >
              <AiOutlineInstagram className="text-4xl hidden group-hover:block pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal closeModal={() => setIsOpen(false)} opacity={80}>
          <IoIosArrowDropleftCircle
            className="text-purple-50 opacity-50 md:text-gray-600 text-5xl lg:text-7xl absolute top-1/2 left-0 z-10 ml-30"
            onClick={() => makeItTwo('left')}
          />
          <div className="md:w-2/3 md:h-3/4 m-auto">
            <img
              className="w-full h-auto md:h-full object-cover lg:object-contain pointer-events-none"
              src={photoUrl}
              alt="Gallery"
            />
          </div>
          <IoIosArrowDroprightCircle
            className="text-purple-50 opacity-50 md:text-gray-600 text-5xl lg:text-7xl absolute top-1/2 right-px z-10 mr-30"
            onClick={() => makeItTwo('right')}
          />
        </Modal>
      )}
    </>
  );
};

export default GallerySection;
