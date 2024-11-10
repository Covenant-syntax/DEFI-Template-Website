import React from 'react'

const AboutCard = (props) => {
  return (
    
        <div className="object-fit overflow-hidden px-4 py-9  border border-gray-300 rounded-2xl flex flex-col   mx-auto ">
            <div className="bg-[#00dBff] rounded-full w-12 h-12 flex justify-center items-center text-slate-800">
          {props.icon}

            </div>
          <h1 className="text-sm font-semibold my-4">{props.header}</h1>
          <p className="text-sm">{props.text}</p>
        </div>
      
  )
}

export default AboutCard
