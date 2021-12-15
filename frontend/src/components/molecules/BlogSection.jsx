import React from 'react';
import { Link } from 'react-router-dom';

import BlogData from '../../json/BlogData.json';

//! Main Return
const BlogSection = () => {
  return (
    <div className="container m-auto my-20 flex flex-col gap-20">
      <p className="text-3xl text-center">Blog</p>
      <div className="container m-auto md:flex md:flex-wrap gap-y-10 lg:px-4">
        {BlogData.data.map((item) => (
          <div className="md:w-1/2 lg:px-20" key={item.id}>
            <div className="h-80 px-0.5">
              <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
            </div>

            <div className="flex flex-col gap-6 px-4">
              <div className="flex justify-between items-center">
                <p className="text-sm">{item.date}</p>
                <p className="text-xs text-gray-500">{item.comments}</p>
              </div>

              <p className="text-2xl text-center">{item.title}</p>

              <p className="text-sm text-gray-500 px-2 truncate">{item.description}</p>

              <Link to={`${item.id}`}>
                <button className="block w-1/2 m-auto mt-4 py-2 border rounded-sm border-gray-600 cursor-pointer">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
