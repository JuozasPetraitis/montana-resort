import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

//! ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

//! Main Component
const Header = () => {
  //! Hooks
  const menuRef = useRef();

  //! Functions
  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuRef.current.classList.toggle('animate-menu');
  };

  return (
    <nav>
      <div className="flex justify-between px-2 md:px-4 bg-black text-white lg:hidden">
        <p className="font-logo text-5xl">Montana Resort</p>

        <div className="flex items-center">
          <span onClick={toggleMenu}>
            <GiHamburgerMenu className="text-4xl" />
          </span>
        </div>
      </div>
      <div className="bg-black hidden" ref={menuRef}>
        <Link to="/">
          <p className="text-white text-center text-2xl">Home</p>
        </Link>
        <Link to="rooms">
          <p className="text-white text-center text-2xl">Rooms</p>
        </Link>
        <Link to="about-us">
          <p className="text-white text-center text-2xl">About</p>
        </Link>
        <Link to="blog">
          <p className="text-white text-center text-2xl">Blog</p>
        </Link>
        <Link to="contacts">
          <p className="text-white text-center text-2xl">Contacts</p>
        </Link>
      </div>

      <div className="max-w-screen-xl m-auto px-2 hidden justify-between lg:flex">
        <div className="flex items-center gap-4">
          <Link to="/">
            <p className="text-lg font-semibold">Home</p>
          </Link>
          <Link to="rooms">
            <p className="text-lg font-semibold">Rooms</p>
          </Link>
          <Link to="about-us">
            <p className="text-lg font-semibold">About</p>
          </Link>
          <Link to="blog">
            <p className="text-lg font-semibold">Blog</p>
          </Link>
          <Link to="contacts">
            <p className="text-lg font-semibold">Contacts</p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-logo text-7xl">Montana Resort</p>
        </div>

        <div className="flex items-center gap-4">
          <AiFillFacebook className="text-2xl text-gray-500" />
          <AiOutlineTwitter className="text-2xl text-gray-500" />
          <AiOutlineInstagram className="text-2xl text-gray-500 " />
          <Link to="rooms">
            <button className="px-6 py-3 rounded-sm bg-blue-400 text-white font-normal">Book a room</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
