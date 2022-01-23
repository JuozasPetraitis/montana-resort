import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

import BlogData from '../../json/BlogData.json';

//! Main Return
const BlogSection = () => {
  return (
    <div className="container m-auto py-10 flex flex-col">
      <div className="container m-auto md:flex md:flex-wrap gap-y-20 lg:px-4">
        <Flip left duration={1500}>
          {BlogData.data.map((item) => (
            <div className="md:w-1/2 lg:px-10" key={item.id}>
              <p className="text-2xl text-center text-gray-700 pb-4">{item.title}</p>
              <div className="h-80 px-0.5 ">
                <img className="w-full h-full object-cover rounded-sm" src={item.image} alt={item.title} />
              </div>

              <div className="flex flex-col px-4 pt-2">
                <div className="flex justify-between items-center pb-8">
                  <p className="text-sm">{item.date}</p>
                  <p className="text-xs text-gray-500">{item.comments}</p>
                </div>

                <p className="text-sm text-gray-500 px-2 text-justify">{item.description}</p>

                <button className="block w-3/12 m-auto mt-4 py-2 border rounded-sm border-gray-600 cursor-pointer">
                  Read More
                </button>
                {/* <Link to={`${item.id}`}></Link> */}
              </div>
            </div>
          ))}
        </Flip>
      </div>
    </div>
  );
};

export default BlogSection;
