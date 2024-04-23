import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='container flex flex-row justify-between items-center bg-backgroundColor w-full'>
            <div className='flex justify-start items-center'>
                <a href='/home' className='p-2'>Home</a>
                <a href='#' className='p-2'>About</a>
                <a href='#' className='p-2'>Portfolio</a>
            </div>
            <div className='flex justify-center items-center'> 
                <img src='/logoPV.png' alt='logo' className='' />
            </div>
            <div className='flex justify-end items-center'>
                <button className='p-2 hover:cursor-pointer'>CV</button>
            </div>
        </div>
    </>
  )
}

export default Navbar;