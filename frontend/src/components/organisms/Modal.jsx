import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal, opacity }) => {
  return createPortal(
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-${opacity} z-20`}>
      <span onClick={() => closeModal()} className="absolute right-0 z-10 text-7xl cursor-pointer mr-4 mt-4">
        &#x2717;
      </span>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">{children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
