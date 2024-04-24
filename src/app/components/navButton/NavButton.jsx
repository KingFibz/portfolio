import React from 'react';
import { useRouter } from 'next/navigation';

const NavigationButton = ({ direction, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    onClick(); // Execute the provided onClick function
    router.push(direction); // Navigate to the specified route
  };

  return (
    <button onClick={handleClick} className="w-8 h-8 focus:outline-none bg-white rounded-full">
      <img src={`${direction}-arrow.png`} alt={`${direction} arrow`} className="w-full h-full" />
    </button>
  );
};

export default NavigationButton;
