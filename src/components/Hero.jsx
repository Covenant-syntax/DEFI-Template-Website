/** @format */

import React from "react";
import HeroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover w-full h-full absolute -z-10'
        src={HeroVid}
        autoPlay
        loop
        muted
      />

      <div className='text-white text-center w-[90%] h-[90%] mx-auto flex flex-col justify-center'>
        <h1 className='md:text-4xl pb-4 md:pb-6'>
          Decentralized <br /> <span className='blue'> Trading</span> Protocols
        </h1>
        <p className='text-base md:text-lg pb-6'>
          Guaranteed liquidity trading for millions of users and top Etherium
          applications
        </p>
        <div>
          <button className='mr-4'>Use Defi</button>
          <button className='bg-transparent'>FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-lg font-semibold ">Total Volume Secured: $42.</p>
      </div>
    </div>
  );
};

export default Hero;
