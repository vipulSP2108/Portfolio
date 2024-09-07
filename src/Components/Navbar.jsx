import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute z-30 p-1 top-16 left-24 rounded-full bg-[#888888]'>
        <div style={{ fontFamily: "Zain" }} className=' bg-white flex text-black p-1 gap-6 rounded-full items-center'>
          <div className=' w-20 rounded-full h-8'></div>
          <div className=' -mb-1 text-lg text-[#131821]'>About</div>
          <div className=' -mb-1 text-lg text-[#131821'>Work</div>
          <div className=' -mb-1 text-lg text-[#131821'>Services</div>
          <div className=' -mb-1 text-lg text-[#131821'>Contact</div>
          <div className='bg-[#2272EF] w-20 rounded-full h-9'>
          </div>
        </div>
      </div>
  )
}
