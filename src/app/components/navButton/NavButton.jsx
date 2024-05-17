import React from 'react';
import { useRouter } from 'next/navigation';

const NavigationButton = ({ direction, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    onClick(); // Execute the provided onClick function
    router.push(direction); // Navigate to the specified route
  };

  return (
    <button onClick={handleClick} className="w-24 h-24 focus:outline-none bg-white rounded-full opacity-90">
      <img src={`${direction}-arrow.png`} alt={`${direction} arrow`} className="ml-5 w-12 h-12" />
    </button>
  );
};

export default NavigationButton;
