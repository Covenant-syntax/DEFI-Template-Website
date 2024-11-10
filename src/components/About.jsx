/** @format */

import React from "react";
import { FaStackExchange } from "react-icons/fa";
import { MdNetworkCheck } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { IoDocumentSharp } from "react-icons/io5";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className='w-full min-h-screen text-white bg-black'>
      <div className='text-center w-[90%] m-auto max-w-[800px]'>
        <h1 className='text-xl mb-3 md:text-2xl'>
          A Growing Protocol Ecosystem
        </h1>
        <p className='text-sm md:base'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          placeat. Quibusdam fugit beatae tenetur sed maxime sapiente,
          distinctio officia at accusamus modi iusto, hic sit nesciunt odit
          quasi alias dolorum.
        </p>
      </div>
      <div className='w-[90%] max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-12'>
        <AboutCard
          icon={<FaStackExchange size={30} />}
          header='Header one'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, placeat. Quibusdam fugit beatae tenetur'
        />
        <AboutCard
          icon={<MdNetworkCheck size={30} />}
          header='Header two'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, placeat. Quibusdam fugit beatae tenetur sed maxime sapiente, '
        />
        <AboutCard
          icon={<IoIosSend size={30} />}
          header='Header three'
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, placeat. Quibusdam fugit beatae tenetur sed maxime "
          }
        />
        <AboutCard
          icon={<IoDocumentSharp size={30} />}
          header='Header four'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, placeat. Quibusdam fugit beatae tenetur sed maxime '
        />
      </div>
      <div className="flex justify-center w-full mt-5">

      <button>Use Defi</button>
      </div>
    </div>
  );
};

export default About;
