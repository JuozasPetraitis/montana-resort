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
  });

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
      <div className="fixed top-0 left-0 right-0 flex flex-col justify-between px-2 md:px-4 bg-black text-white lg:hidden z-10">
        <div className="flex justify-between">
          <p className="font-logo text-5xl">Montana Resort</p>

          <div className="flex items-center">
            <span onClick={toggleMenu}>
              <GiHamburgerMenu className="text-4xl" />
            </span>
          </div>
        </div>

        <div className="hidden" ref={menuRef}>
          <Link to="/" onClick={toggleMenu}>
            <p className="text-white text-center text-2xl">Home</p>
          </Link>
          <Link to="rooms" onClick={toggleMenu}>
            <p className="text-white text-center text-2xl">Rooms</p>
          </Link>
          <Link to="about" onClick={toggleMenu}>
            <p className="text-white text-center text-2xl">About</p>
          </Link>
          <Link to="blog" onClick={toggleMenu}>
            <p className="text-white text-center text-2xl">Blog</p>
          </Link>
          <Link to="contacts" onClick={toggleMenu}>
            <p className="text-white text-center text-2xl">Contacts</p>
          </Link>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 w-full z-10 text-gray-800">
        <div className={`${trackScroll ? '' : 'bg-black'}`}>
          <div className="container m-auto hidden lg:flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <Link to="/">
                <p
                  className={`${
                    trackScroll
                      ? 'text-xl font-semibold text-gray-800 uppercase hover:text-gray-600 hover:underline'
                      : 'text-xl font-semibold uppercase hover:text-gray-400'
                  }`}
                >
                  Home
                </p>
              </Link>
              <Link to="rooms">
                <p
                  className={`${
                    trackScroll
                      ? 'text-xl font-semibold text-gray-800 uppercase hover:text-gray-600 hover:underline'
                      : 'text-xl font-semibold uppercase hover:text-gray-400'
                  }`}
                >
                  Rooms
                </p>
              </Link>
              <Link to="about">
                <p
                  className={`${
                    trackScroll
                      ? 'text-xl font-semibold text-gray-800 uppercase hover:text-gray-600 hover:underline'
                      : 'text-xl font-semibold uppercase hover:text-gray-400'
                  }`}
                >
                  About
                </p>
              </Link>
              <Link to="blog">
                <p
                  className={`${
                    trackScroll
                      ? 'text-xl font-semibold text-gray-800 uppercase hover:text-gray-600 hover:underline'
                      : 'text-xl font-semibold uppercase hover:text-gray-400'
                  }`}
                >
                  Blog
                </p>
              </Link>
              <Link to="contacts">
                <p
                  className={`${
                    trackScroll
                      ? 'text-xl font-semibold text-gray-800 uppercase hover:text-gray-600 hover:underline'
                      : 'text-xl font-semibold uppercase hover:text-gray-400'
                  }`}
                >
                  Contacts
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className={`font-logo text-5xl lg:text-6xl cursor-default ${trackScroll ? ' text-gray-800' : ''}`}>
                Montana Resort
              </p>
            </div>
            <div className="flex gap-4 justify-between">
              <button
                className={`${
                  trackScroll
                    ? 'px-4 py-2 rounded-sm border-2 border-black text-lg font-semibold text-gray-800 hover:text-black hover:border-gray-600'
                    : 'px-4 py-2 rounded-sm border-2 border-white text-lg font-semibold text-white hover:border-gray-600'
                }`}
              >
                Book a room
              </button>

              <button
                className={`${
                  trackScroll
                    ? 'px-4 py-2 rounded-sm border-2 border-black text-lg font-semibold text-gray-800 hover:text-black hover:border-gray-600'
                    : 'px-4 py-2 rounded-sm border-2 border-white text-lg font-semibold text-white hover:border-gray-600'
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
          <p className="text-4xl tracking-widest capitalize font-normal text-center">{fullScreenTitle}</p>
          {fullScreen && <p className="text-2xl text-center">Unlock to enjoy the best views of Maldives</p>}
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
