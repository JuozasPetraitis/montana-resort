import React from 'react';
import { Link } from 'react-router-dom';

//! Main Component
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl m-auto py-16 px-4 md:flex flex-wrap justify-around lg:justify-evenly">
        <div className="mb-8">
          <h3 className="mb-5 font-raleway text-2xl">Address</h3>
          <p className=" text-gray-300">200, Green road, Mongla,</p>
          <p className="mb-5 text-gray-300">New York City USA</p>
          <Link to="#">
            <p className="text-gray-300">Get directions</p>
          </Link>
        </div>

        <div className="mb-8">
          <h3 className="mb-5 text-2xl">Reservation</h3>
          <p className="text-gray-300">+10 367 267 2678</p>
          <p className="mb-5 text-gray-300">reservation@montana.com</p>
        </div>

        <div className="md:w-3/4 lg:w-auto">
          <h3 className="text-2xl text-center">Newsletter</h3>
          <form className="flex my-5">
            <input className="text-center w-3/4" type="text" placeholder="Enter your mail" />
            <input className="py-2 px-5 bg-blue-400 text-white" type="button" value="Sign Up" />
          </form>

          <p className="text-gray-300 text-center">Subscribe newsletter to get updates</p>
        </div>
      </div>

      <hr class="mx-8 border-b border-gray-700"></hr>
      <p className="py-5 text-center text-sm text-gray-300">Copyright ©2021 All rights reserved</p>
    </footer>
  );
};

export default Footer;
