import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal, opacity }) => {
  return createPortal(
    <div className={`fixed top-0 left-0 w-full h-full text-6xl bg-gray-200 bg-opacity-${opacity}`}>
      <span onClick={() => closeModal()} className="absolute right-0 z-10 cursor-pointer">
        &#x2717;
      </span>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">{children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
