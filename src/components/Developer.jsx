import React from 'react'
import terminal from '../assets/terminal.png'

const Developer = () => {
  return (
    <div className='bg-black w-full py-16 md:py-0'>
      <div className='w-[90%] max-w-[800px] text-white flex flex-col mx-auto  md:flex-row items-center'>
        <div>
    <h1 className='text-2xl'>Superpowers for DEFI developers.</h1>
    <p className=''>Lorem ipsum dolor, sit amet consectetur <span className='blue'>adipisicing</span> elit. Tempore commodi ,<span className='blue'>repellat</span> recusandae libero error, quos totam blanditiis accusantium.</p>

        </div>
        <div className='w-[60%] flex justify-center py-16 md:ml-4'>
        <img  className='w-full min-w-[300px] max-w-[500px] shadow-lg shadow-cyan-500/50 ' src={terminal} alt="/" />

        </div>
      </div>
    </div>
  )
}

export default Developer
