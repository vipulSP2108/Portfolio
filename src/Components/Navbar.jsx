import React from 'react'
import '../App.css';
import { FaArrowUp } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div className=' fixed z-50 p-[7px] top-12 right-14 justify-between rounded-full'
      // style={{ width: `${(oneCellWidth * 4)}px`, height: `${oneCellHeight * 2}px` }}
      id='glasses'
      // style={{ backgroundColor: "#888888" }}
    >
      <div style={{ fontFamily: "Zain" }} className=' bg-white flex text-black p-1 gap-6 rounded-full items-center'>
        <div className=' w-20 rounded-full h-8'></div>
        <div className=' -mb-1 text-lg text-[#131821]'>About</div>
        <div className=' -mb-1 text-lg text-[#131821]'>Work</div>
        <div className=' -mb-1 text-lg text-[#131821]'>Services</div>
        <div className=' -mb-1 text-lg text-[#131821]'>Contact</div>
        <div className='bg-[#2272EF] w-20 rounded-full h-9 flex items-center justify-center'>
          <FaArrowUp color='#fff'/>
        </div>
      </div>
    </div>
  )
}
