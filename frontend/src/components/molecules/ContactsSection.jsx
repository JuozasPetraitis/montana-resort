import React from 'react';
import Slide from 'react-reveal/Slide';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

//! ICONS
import { GoHome, GoDeviceMobile, GoMail } from 'react-icons/go';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';

//! Main Component

const ContactsSection = () => {
  const onSubmitFunction = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log('You are awesome');
  };

  return (
    <div className="container m-auto flex flex-col my-10 gap-8">
      <Slide right>
        <div>
          <p className="text-center text-xl font-semibold mb-8">Please fill out our form!</p>
          <form onSubmit={onSubmitFunction} className="flex flex-col gap-4 max-w-lg m-auto">
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-black md:rounded py-2 px-4 w-auto text-black"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-black md:rounded py-2 px-4 w-auto text-black"
            />
            <input
              type="text"
              placeholder="Enter your subject"
              className="border border-black md:rounded py-2 px-4 w-auto text-black"
            />
            <input
              type="text"
              placeholder="Enter your message"
              className="border border-black md:rounded py-2 px-4 w-auto text-black"
            />
            <input
              type="submit"
              value="Send us a message"
              className="bg-black text-white w-2/3 m-auto py-2 font-semibold cursor-pointer"
            />
          </form>
        </div>
      </Slide>

      <Slide left>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 my-4">
          <div className="ml-4 flex md:items-center gap-4">
            <GoHome className="text-4xl" />
            <div>
              <p className="text-lg">Buttonwood, California.</p>
              <p className="font-light">Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="ml-4 flex md:items-center gap-4">
            <GoDeviceMobile className="text-4xl" />
            <div>
              <p className="text-lg">+1 253 565 2365</p>
              <p className="font-light">Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="ml-4 flex md:items-center gap-4">
            <GoMail className="text-4xl" />
            <div>
              <p className="text-lg">support@cib.com</p>
              <p className="font-light">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </Slide>

      <Slide right>
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-center mb-4 lg:text-4xl">Follow us</p>
          <div className="flex justify-center gap-8">
            <AiFillFacebook className="text-3xl text-blue-500 cursor-pointer" />
            <AiOutlineTwitter className="text-3xl text-blue-300 cursor-pointer" />
            <AiFillInstagram className="text-3xl text-yellow-300 cursor-pointer" />
            <TiSocialYoutubeCircular className="text-3xl text-red-600 cursor-pointer" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ContactsSection;
