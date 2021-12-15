import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

//! Main Component
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container m-auto py-8 px-0.5 flex flex-col gap-y-8 md:flex-row md:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-4 md:w-1/2 md:px-4">
          <p className="text-2xl text-blue-200">Montana Resort</p>

          <p className="text-sm">
            Leather detail contrastic colour contour stunning silhouette working peplum. Statement buttons patch.
          </p>

          <div className="flex items-center gap-2">
            <AiFillFacebook className="text-3xl text-white opacity-70" />
            <AiOutlineTwitter className="text-3xl text-white opacity-70" />
            <AiOutlineInstagram className="text-3xl text-white opacity-70" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2 md:px-4">
          <p className="text-2xl">Navigation</p>

          <div className="flex flex-col">
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/rooms">
              <p>Our Rooms</p>
            </Link>
            <Link to="/blog">
              <p>Blog</p>
            </Link>
            <Link to="/contacts">
              <p>Contacts</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2 md:px-4">
          <p className="text-2xl">Contact</p>

          <div>
            <p>76/A, Green Lane, Dhanmondi, NYC</p>
            <p>10 (87) 738-3940</p>
            <p>contact@carwash.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2 md:px-4">
          <p className="text-2xl text-center">Newsletter</p>

          <form className="flex justify-between">
            <input className="text-center w-full py-1 rounded-sm" type="text" placeholder="Enter your mail" />
            <input className="bg-blue-400 text-white px-4 rounded-sm" type="button" value="Sign Up" />
          </form>

          <p className="text-gray-300 text-center">Subscribe our newsletter to get updates</p>
        </div>
      </div>

      <hr className="mx-4 border-b border-gray-700"></hr>
      <p className="py-5 text-center text-sm text-gray-300">Copyright ©2021 All rights reserved</p>
    </footer>
  );
};

export default Footer;
