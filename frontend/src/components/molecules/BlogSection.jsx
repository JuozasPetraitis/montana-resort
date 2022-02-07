import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import BlogData from '../../json/BlogData.json';

//! Main Return
const BlogSection = () => {
  return (
    <div className="container m-auto py-10 flex flex-col">
      <div className="container m-auto flex flex-col md:flex-wrap md:flex-row gap-12 md:gap-0 lg:px-4">
        {BlogData.data.map((item) => (
          <div className="md:w-1/2 md:px-4 md:py-8 lg:px-10" key={item.id}>
            <p className="text-2xl text-center font-medium pb-2">{item.title}</p>
            <div className="h-80 px-0.5 ">
              <Slide right duration={1500}>
                <img className="w-full h-full object-cover rounded-sm" src={item.image} alt={item.title} />
              </Slide>
            </div>

            <div className="flex flex-col justify-around gap-8 px-4 pt-2">
              <div className="flex justify-between items-center">
                <p className="text-sm">{item.date}</p>
                <p className="text-gray-500 text-sm">{item.comments}</p>
              </div>
              <Slide left duration={1000}>
                <p className="text-lg px-2 break-all">{item.description}</p>
              </Slide>

              <button className="py-2 px-12 border rounded-sm border-blue-400 text-blue-800 font-semibold self-center hover:tracking-wider">
                Read More
              </button>
              {/* <Link to={`${item.id}`}></Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
