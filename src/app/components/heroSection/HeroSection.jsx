import React from 'react';
import NavButton from '../navButton/NavButton'; // Import the NavigationButton component
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    const navigateToAbout = () => {
      router.push('/about');
    };
  
    const navigateToPortfolio = () => {
      router.push('/portfolio');
    };

  return (
    <div className="bg-bgColor min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left arrow button */}
        <div className="hidden md:block">
          <NavButton direction="left" onClick={() => {}} />
        </div>

        {/* Hero image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          {/* Transparent circle */}
          <div className="absolute top-6 left-16 mt-12 ml-16 border border-white border-opacity-50 rounded-full w-48 h-48"></div>
            <img src="/heroImage.jpg" alt="Hero" className="w-full h-auto md:h-full md:w-auto rounded-lg" style={{ height: '80vh', maxWidth: '100%', objectFit: 'cover' }} />
          {/* Paragraph */}
          <div className="absolute top-16 left-16 mt-16 ml-2 pt-8">
            <p className="text-white font-semibold text-lg">Hi, I`m Peter</p>
          </div>
        </div>

        {/* Right arrow button */}
        <div>
          <NavButton direction="right" onClick={navigateToAbout} />
        </div>
      </div>

      {/* Social media icons */}
      <div className="container mx-auto px-8 py-4 flex justify-center">
        <a href='https://www.facebook.com/peter.vasilev.7' target='_blank'><img src="/facebook.png" alt="Facebook" className="w-6 h-6 mr-4 hover:cursor-pointer" /></a>
        <a href='https://www.linkedin.com/peter.vasilev.7' target='_blank'><img src="/linkedin.png" alt="Twitter" className="w-6 h-6 mr-4 hover:cursor-pointer" /></a>
        <a href='https://www.instagram.com/peter.vasilev.7/' target='_blank'><img src="/instagram.png" alt="Instagram" className="w-6 h-6 hover:cursor-pointer" /></a>
      </div>
    </div>
  );
};

export default HeroSection;
