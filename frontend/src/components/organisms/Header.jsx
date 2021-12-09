import React, { useRef, useState, useEffect } from 'react';
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
  const [trackScroll, setTrackScroll] = useState(0);

  const handleScroll = () => {
    setTrackScroll(window.scrollY);
    console.log(window.scrollY);
    // console.log(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  //! Functions
  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuRef.current.classList.toggle('animate-menu');
  };

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 flex flex-col justify-between px-2 md:px-4 bg-black text-white lg:hidden z-10">
        <div className="flex justify-between">
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
          <Link to="about">
            <p className="text-white text-center text-2xl">About</p>
          </Link>
          <Link to="blog">
            <p className="text-white text-center text-2xl">Blog</p>
          </Link>
          <Link to="contacts">
            <p className="text-white text-center text-2xl">Contacts</p>
          </Link>
        </div>
      </div>

      {trackScroll < window.innerHeight - 100 ? (
        <div className="fixed top-0 left-0 right-0 container m-auto hidden justify-evenly lg:flex text-white z-10">
          <div className="flex items-center gap-4">
            <Link to="/">
              <p className="text-lg font-light tracking-widest">Home</p>
            </Link>
            <Link to="rooms">
              <p className="text-lg font-light tracking-widest">Rooms</p>
            </Link>
            <Link to="about">
              <p className="text-lg font-light tracking-widest">About</p>
            </Link>
            <Link to="blog">
              <p className="text-lg font-light tracking-widest">Blog</p>
            </Link>
            <Link to="contacts">
              <p className="text-lg font-light tracking-widest">Contacts</p>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="font-logo text-5xl">Montana Resort</p>
          </div>

          <div className="flex items-center gap-2">
            <AiFillFacebook className="text-3xl text-white opacity-70" />
            <AiOutlineTwitter className="text-3xl text-white opacity-70" />
            <AiOutlineInstagram className="text-3xl text-white opacity-70" />
            <Link to="rooms">
              <button className="ml-4 px-8 py-2 rounded-sm border border-black text-black font-normal">
                Book a room
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 right-0 w-full bg-black z-10">
          <div className="container m-auto text-white hidden justify-evenly lg:flex z-10">
            <div className="flex items-center gap-4">
              <Link to="/">
                <p className="text-lg font-light tracking-widest">Home</p>
              </Link>
              <Link to="rooms">
                <p className="text-lg font-light tracking-widest">Rooms</p>
              </Link>
              <Link to="about">
                <p className="text-lg font-light tracking-widest">About</p>
              </Link>
              <Link to="blog">
                <p className="text-lg font-light tracking-widest">Blog</p>
              </Link>
              <Link to="contacts">
                <p className="text-lg font-light tracking-widest">Contacts</p>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="font-logo text-5xl">Montana Resort</p>
            </div>

            <div className="flex items-center gap-2">
              <AiFillFacebook className="text-3xl text-white opacity-70" />
              <AiOutlineTwitter className="text-3xl text-white opacity-70" />
              <AiOutlineInstagram className="text-3xl text-white opacity-70" />
              <Link to="rooms">
                <button className="ml-4 px-8 py-2 rounded-sm bg-blue-400 text-white font-normal">Book a room</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
