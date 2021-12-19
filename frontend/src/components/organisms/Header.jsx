import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//! ICONS
import { GiHamburgerMenu } from 'react-icons/gi';

//! IMG
import HomeImage from '../../assets/images/Hero.jpg';
import RoomImage from '../../assets/images/Thumbnail.jpg';
import AboutImage from '../../assets/images/Gallery3.jpg';
import BlogImage from '../../assets/images/Gallery2.jpg';
import ContactsImage from '../../assets/images/Contact2.jpg';

//! Components
import Modal from './Modal';
import LoginForm from './LoginForm';

//! Main Component
const Header = () => {
  //! Hooks
  const menuRef = useRef();
  const [trackScroll, setTrackScroll] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  let history = createBrowserHistory();

  useEffect(() => {
    const handleScroll = () => {
      switch (fullScreen) {
        case true:
          window.innerHeight - 50 <= window.scrollY ? setTrackScroll(false) : setTrackScroll(true);
          break;
        case false:
          window.innerHeight / 2 - 50 <= window.scrollY ? setTrackScroll(false) : setTrackScroll(true);
          break;
        default:
          break;
      }
    };
    window.addEventListener('scroll', handleScroll);
  });

  //! Functions
  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuRef.current.classList.toggle('animate-menu');
  };

  let Image;
  let fullScreen;
  switch (history.location.pathname) {
    case '/':
      Image = HomeImage;
      fullScreen = true;
      break;
    case '/rooms':
      Image = RoomImage;
      fullScreen = false;
      break;
    case '/about':
      Image = AboutImage;
      fullScreen = false;
      break;
    case '/blog':
      Image = BlogImage;
      fullScreen = false;
      break;
    case '/contacts':
      Image = ContactsImage;
      fullScreen = false;
      break;
    default:
      break;
  }

  console.dir(window);
  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 flex flex-col justify-between px-2 md:px-4 bg-gray-600 text-white lg:hidden z-10">
        <div className="flex justify-between">
          <p className="font-logo text-5xl">Montana Resort</p>

          <div className="flex items-center">
            <span onClick={toggleMenu}>
              <GiHamburgerMenu className="text-4xl" />
            </span>
          </div>
        </div>

        <div className="hidden" ref={menuRef}>
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

      <div className="fixed top-0 left-0 right-0 w-full z-10 ">
        <div className={`${trackScroll ? '' : 'bg-black'}`}>
          <div className="container m-auto hidden lg:flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <Link to="/">
                <p className="text-xl font-normal">Home</p>
              </Link>
              <Link to="rooms">
                <p className="text-xl font-normal">Rooms</p>
              </Link>
              <Link to="about">
                <p className="text-xl font-normal">About</p>
              </Link>
              <Link to="blog">
                <p className="text-xl font-normal">Blog</p>
              </Link>
              <Link to="contacts">
                <p className="text-xl font-normal">Contacts</p>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="font-logo text-5xl lg:text-6xl">Montana Resort</p>
            </div>
            <div className="flex gap-4 justify-between">
              <Link to="rooms">
                <button className="px-4 py-2 rounded-sm border-2 text-lg font-semibold">Book a room</button>
              </Link>

              <button onClick={() => setIsOpen(true)} className="px-4 py-2 rounded-sm border-2 text-lg font-semibold">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${fullScreen ? 'h-screen' : 'h-halfScreen'} relative`}>
        <div className="h-full">
          <img className="w-full h-full object-cover opacity-90" src={Image} alt="" />
        </div>

        <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
          <p className="text-4xl tracking-widest capitalize font-normal text-white text-center">Life Is Beautiful</p>
          {fullScreen && <p className="text-2xl text-white text-center">Unlock to enjoy the best views of Maldives</p>}
          {window.innerWidth < 768 ? (
            <div className="flex gap-4 justify-between">
              <Link to="rooms">
                <button className="px-4 py-2 font-semibold bg-opacity-60 bg-white">Book a room</button>
              </Link>

              <button onClick={() => setIsOpen(true)} className="px-4 py-2 font-semibold bg-opacity-60 bg-white">
                Log in
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {isOpen && (
        <Modal closeModal={() => setIsOpen(false)} opacity={90}>
          <LoginForm />
        </Modal>
      )}
    </nav>
  );
};

export default Header;
