/** @format */

import React from "react";

const Subscribe = () => {
  return (
    <div className='bg-black w-full'>
      <div className='w-[90%] max-w-[800px] mx-auto flex flex-col text-white justify-center items-center md:pt-16'>
        <h1 className='text-2xl md:4xl'>Join Our DeFi Community</h1>
        <div className='flex mt-4 items-center justify-center flex-col md:flex-row w-[400px] '>
          <input
            className='rounded-full p-3 mr-2 mb-3 md:mb-0'
            type='text'
            placeholder='Enter your Email'
          />
          <div>
            <button className='px-4 py-2 md:px-7 md:py-3'>Sign Up</button>
          </div>
        </div>
        <div className='flex mt-4 items-start'>
          <input className='mr-2' type='checkbox' />
          <p className='text-xs text-center md:text-sm'>
            Yes, I agree to receive email communication from Defi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
