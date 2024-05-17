'use client';

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/heroSection/HeroSection';
import AboutSection from '../components/aboutSection/AboutSection';

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    </>
  );
};

export default page;