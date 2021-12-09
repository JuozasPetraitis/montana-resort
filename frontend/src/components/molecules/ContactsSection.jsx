import React from 'react';

import { GoHome, GoDeviceMobile, GoMail } from 'react-icons/go';

import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';

//! Main Component
const ContactsSection = () => {
  return (
    <div className="container m-auto flex flex-col justify-center my-10">
      <p className="text-center lg:text-4xl">Contact us</p>

      <div className="flex justify-center items-center gap-4 my-20">
        <form className="flex flex-col gap-4 my-8 mx-2 w-2/5">
          <input type="text" placeholder="Enter your name" className="border border-gray-200 text-sm px-4 py-2" />
          <input type="text" placeholder="Email" className="border border-gray-200 text-sm px-4 py-2" />
          <input type="text" placeholder="Subject" className="border border-gray-200 text-sm px-4 py-2" />
          <input type="text" placeholder="Enter Message" className="border border-gray-200 text-sm px-4 py-2" />
          <input
            type="submit"
            value="Send"
            className="bg-gray-400 text-lg text-white w-1/2 m-auto py-1 cursor-pointer"
          />
        </form>

        <div className="hidden lg:block h-map w-2/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9488.876548007836!2d73.22532508491172!3d-0.6247486301494652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1639063331727!5m2!1slt!2slt"
            allowfullscreen="false"
            loading="lazy"
            title="Map"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 my-4">
        <div className="ml-4 flex md:items-center gap-4">
          <GoHome className="text-5xl" />
          <div>
            <p className="text-lg">Buttonwood, California.</p>
            <p className="font-light">Rosemead, CA 91770</p>
          </div>
        </div>

        <div className="ml-4 flex md:items-center gap-4">
          <GoDeviceMobile className="text-5xl" />
          <div>
            <p className="text-lg">+1 253 565 2365</p>
            <p className="font-light">Mon to Fri 9am to 6pm</p>
          </div>
        </div>

        <div className="ml-4 flex md:items-center gap-4">
          <GoMail className="text-5xl" />
          <div>
            <p className="text-lg">support@cib.com</p>
            <p className="font-light">Send us your query anytime!</p>
          </div>
        </div>
      </div>

      <div className="my-8">
        <p className="text-2xl text-center mb-4 lg:text-4xl">Follow us</p>
        <div className="flex justify-center gap-6">
          <AiFillFacebook className="text-4xl" />
          <AiOutlineTwitter className="text-4xl" />
          <AiOutlineInstagram className="text-4xl" />
          <TiSocialYoutubeCircular className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
