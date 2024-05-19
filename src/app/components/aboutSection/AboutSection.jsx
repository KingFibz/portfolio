/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutSection = () => {
  return (
    <div className=" flex bg-bgColor pb-20 sm:flex-col justify-center items-center">
      {/* About section for medium and large screens */}
      <div className="flex flex-col-reverse px-8 py-12 md:flex-row items-center  sm:w-3/5">
        {/* Large rectangle with text and call-to-action button */}
        <div className="flex justify-center items-center flex-col bg-white rounded-xl p-8 md:-mr-10">
          {/* Text */}
          <p className="text-center md:text-left mb-6 sm:text-center">
            <span className="block font-semibold font-gara text-2xl mb-2 md:text-3xl">I’m a Frontend Developer and QA Engineer.</span>
            <span className="block mb-2 font-gara text-lg">My passion is helping people bring their tech ideas to life.</span>
            <span className="block font-gara text-lg">I provide custom solutions for your websites & mobile apps that meet your requirements and needs.</span>
          </p>
          {/* Call-to-action button */}
          <button className="bg-buttonBackground hover:bg-blue-600 text-secondaryColor font-bold font-gara py-2 px-4 rounded-full">Get In Touch</button>
        </div>
        
        {/* Smaller rectangle with image */}
        <div className="w-50 -mt-16 md:w-64 h-48 -mb-16">
          <img src="/aboutImage.jpg" alt="About" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
