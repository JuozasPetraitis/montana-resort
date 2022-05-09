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
// import Modal from './Modal';
// import LoginForm from './LoginForm';
// import BookRoomForm from './BookRoomForm';

//! Main Component
const Header = () => {
  //! Hooks
  const menuRef = useRef();
  const [fullScreenTitle, setFullScreenTitle] = useState('Home');
  const [fullScreenImage, setFullScreenImage] = useState();
  const [fullScreen, setfullScreen] = useState();
  const [trackScroll, setTrackScroll] = useState(true);
  //   const [whichModal, setWhichModal] = useState(null);
  //   const [isOpen, setIsOpen] = useState(false);
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
  }, [fullScreen]);

  useEffect(() => {
    switch (history.location.pathname) {
      case '/':
        setFullScreenImage(HomeImage);
        setfullScreen(true);
        setFullScreenTitle('Home Page');
        break;
      case '/rooms':
        setFullScreenImage(RoomImage);
        setfullScreen(false);
        setFullScreenTitle('Our Rooms');
        break;
      case '/about':
        setFullScreenImage(AboutImage);
        setfullScreen(false);
        setFullScreenTitle('About Us');
        break;
      case '/blog':
        setFullScreenImage(BlogImage);
        setfullScreen(false);
        setFullScreenTitle('Blog Page');
        break;
      case '/contacts':
        setFullScreenImage(ContactsImage);
        setfullScreen(false);
        setFullScreenTitle('Contact Us');
        break;
      default:
        break;
    }
  }, [history.location.pathname]);

  //! Functions
  const toggleMenu = () => {
    menuRef.current.classList.toggle('hidden');
    menuRef.current.classList.toggle('animate-menu');
  };

  //   const bookHandler = () => {
  //     setIsOpen(true);
  //     setWhichModal(true);
  //   };

  //   const logInHandler = () => {
  //     setIsOpen(true);
  //     setWhichModal(false);
  //   };

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 flex flex-col justify-between px-4 md:px-4 bg-black text-white lg:hidden z-10 py-4">
        <div className="flex justify-between">
          <p className="font-logo text-4xl font-bold pl-2">Montana Resort</p>

          <div className="flex items-center">
            <span onClick={toggleMenu}>
              <GiHamburgerMenu className="text-4xl" />
            </span>
          </div>
        </div>

        <div className="hidden py-4" ref={menuRef}>
          <Link to="/" onClick={toggleMenu}>
            <p className="text-white text-center text-xl pb-2">Home</p>
          </Link>
          <Link to="rooms" onClick={toggleMenu}>
            <p className="text-white text-center text-xl py-2">Rooms</p>
          </Link>
          <Link to="about" onClick={toggleMenu}>
            <p className="text-white text-center text-xl py-2">About</p>
          </Link>
          <Link to="blog" onClick={toggleMenu}>
            <p className="text-white text-center text-xl py-2">Blog</p>
          </Link>
          <Link to="contacts" onClick={toggleMenu}>
            <p className="text-white text-center text-xl pt-2">Contacts</p>
          </Link>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 w-full z-10 text-gray-800">
        <div className={`${trackScroll ? '' : 'bg-black'} px-4`}>
          <div className="container m-auto hidden lg:flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <Link to="/">
                <p
                  className={`${
                    trackScroll
                      ? 'font-semibold text-gray-900 uppercase hover:text-gray-600 hover:underline'
                      : 'font-semibold uppercase hover:text-gray-200 hover:underline'
                  }`}
                >
                  Home
                </p>
              </Link>
              <Link to="rooms">
                <p
                  className={`${
                    trackScroll
                      ? 'font-semibold text-gray-900 uppercase hover:text-gray-600 hover:underline'
                      : 'font-semibold uppercase hover:text-gray-200 hover:underline'
                  }`}
                >
                  Rooms
                </p>
              </Link>
              <Link to="about">
                <p
                  className={`${
                    trackScroll
                      ? 'font-semibold text-gray-900 uppercase hover:text-gray-600 hover:underline'
                      : 'font-semibold uppercase hover:text-gray-200 hover:underline'
                  }`}
                >
                  About
                </p>
              </Link>
              <Link to="blog">
                <p
                  className={`${
                    trackScroll
                      ? 'font-semibold text-gray-900 uppercase hover:text-gray-600 hover:underline'
                      : 'font-semibold uppercase hover:text-gray-200 hover:underline'
                  }`}
                >
                  Blog
                </p>
              </Link>
              <Link to="contacts">
                <p
                  className={`${
                    trackScroll
                      ? 'font-semibold text-gray-900 uppercase hover:text-gray-600 hover:underline'
                      : 'font-semibold uppercase hover:text-gray-200 hover:underline'
                  }`}
                >
                  Contacts
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className={`font-logo text-4xl lg:text-5xl cursor-default ${trackScroll ? ' text-gray-800' : ''}`}>Montana Resort</p>
            </div>
            <div className="flex gap-4 justify-between py-2 px-2">
              <button
                className={`${
                  trackScroll
                    ? 'px-2 lg:px-4 lg:py-1 rounded-sm border border-black text-gray-800 hover:text-black hover:border-gray-600'
                    : 'px-2 lg:px-4 lg:py-1 rounded-sm border border-white text-white hover:border-gray-600'
                }`}
              >
                Book a room
              </button>

              <button
                className={`${
                  trackScroll
                    ? 'px-2 lg:px-6 lg:py-1 rounded-sm border border-black text-gray-800 hover:text-black hover:border-gray-600'
                    : 'px-2 lg:px-6 lg:py-1 rounded-sm border border-white text-white hover:border-gray-600'
                }`}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${fullScreen ? 'h-screen' : 'h-halfScreen'} relative`}>
        <div className="h-full">
          <img className="w-full h-full object-cover opacity-50" src={fullScreenImage} alt="" />
        </div>

        <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
          <p className="text-2xl tracking-widest uppercase text-center font-medium text-black border border-black rounded-sm px-12">{fullScreenTitle}</p>
          {fullScreen && <p className="text-2xl text-center pt-2">Unlock to enjoy the best views of Maldives</p>}
          {/* {window.innerWidth < 768 ? (
            <div className="flex gap-4 justify-between">
              <button className="px-4 py-2 font-semibold bg-opacity-60 bg-white">Book a room</button>

              <button className="px-4 py-2 font-semibold bg-opacity-60 bg-white">Log in</button>
            </div>
          ) : null} */}
        </div>
      </div>

      {/* {isOpen && (
        <Modal closeModal={() => setIsOpen(false)} opacity={90}>
          {whichModal ? <BookRoomForm /> : <LoginForm />}
        </Modal>
      )} */}
    </nav>
  );
};

export default Header;
