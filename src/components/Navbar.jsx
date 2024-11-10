/** @format */

import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    function handleNav() {
        setNav(!nav);
    }
  return (
    <div className='bg-black w-full h-[90px] px-4 py-4'>
      <div className='flex justify-between max-w-[1024px] mx-auto items-center '>
        <h1 className='text-[#00dBff] text-3xl font-bold'>Defi</h1>

        <ul className='hidden md:flex'>
          <li>Platform</li>
          <li>Developers</li>
          <li>Community</li>
          <li>About</li>
          <button className='ml-4'>Use Defi</button>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <IoMdClose size={30} className='text-white' /> : <IoMdMenu size={30} className='text-white' /> }
          
          
        </div>
        <div className= {nav ? 'md:hidden bg-black flex flex-col absolute w-full text-center top-[90px] left-0': ' absolute left-[-100%]' }>
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='px-9 m-4'>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
