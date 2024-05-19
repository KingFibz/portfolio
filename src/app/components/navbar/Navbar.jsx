/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

  return (
        <div className='flex justify-between items-center bg-bgColor/90'>
                {/* Hamburger menu */}
                <div className="ml-7 block sm:hidden">
                    <button onClick={toggleMenu} className="h-12 w-12 p-2 focus:outline-none">
                        <img src='/hamburger.png' alt='hamburger menu'/>
                    </button>
                </div>

                {/* Navigation links for small screens */}
                <div className={`${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
                    <a href='/home' className='text-white p-2 hover:cursor-pointer underline underline-offset-4'>Home</a>
                    <a href='#' className='text-white p-2 hover:cursor-pointer underline underline-offset-4'>About</a>
                    <a href='#' className='text-white p-2 hover:cursor-pointer underline underline-offset-4'>Portfolio</a>
                </div>

                {/* Navigation links for medium/large screens */}
                <div className="font-gara text-xl hidden sm:flex flex-row ml-14">
                    <a href='/home' className='text-white text-3xl p-2 hover:cursor-pointer underline underline-offset-4'>Home</a>
                    <a href='#' className='text-white text-3xl p-2 hover:cursor-pointer underline underline-offset-4'>About</a>
                    <a href='#' className='text-white text-3xl p-2 hover:cursor-pointer underline underline-offset-4'>Portfolio</a>
                </div>
            
            {/* Logo */}
            <div className='flex justify-center items-center'> 
                <img src='/logoPV.png' alt='logo' className='w-32 h-32 md:w-40 md:h-40 object-contain' />
            </div>

            {/* CV button */}
            <div className='flex justify-end items-center h-40 mr-14 sm:ml-40'>
                <button className='text-white text-3xl font-gara text-xl p-2 hover:cursor-pointer underline underline-offset-4'>CV</button>
            </div>
        </div>
  )
}

export default Navbar;