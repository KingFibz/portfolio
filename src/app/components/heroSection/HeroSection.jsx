/* eslint-disable @next/next/no-img-element */
import React from "react";


const HeroSection = () => {
  return (
    // container div for the img and circle
    <div className="bg-bgColor">
      <div className="flex flex-col items-center justify-center">
        {/* Transparent circle and paragraph */}
        <div className="-mb-28 sm:mb-16 pt-16 w-auto h-auto">
          <div className="border border-secondaryColor rounded-full w-60 h-60 flex flex-row items-center justify-center">
            <p className="text-white font-semibold text-lg sm:-ml-60">Hi, I&apos;m Peter</p>
          </div>
        </div>
        {/* Container for image */}
        <div className="sm:w-3/5">
          {/* Hero image */}
          <img
            src="/heroImage.jpg"
            alt="Hero"
            className="h-full rounded-full md: p-10"
          />
        </div>
      </div>

      {/* Social media icons */}
      <div className="container mx-auto px-8 py-16 flex justify-center">
        <a href="https://www.facebook.com/peter.vasilev.7" target="_blank">
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-6 h-6 mr-4 hover:cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/peter.vasilev.7" target="_blank">
          <img
            src="/linkedin.png"
            alt="Twitter"
            className="w-6 h-6 mr-4 hover:cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/peter.vasilev.7/" target="_blank">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-6 h-6 hover:cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
