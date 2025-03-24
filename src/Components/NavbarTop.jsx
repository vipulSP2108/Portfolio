import React from 'react'

export default function NavbarTop() {
  return (
    <div 
    className={`navbar fixed z-50 px-[10px] top-5 right-4 md:px-[30px] md:top-12 md:right-10 justify-between`}
    // className="fixed z-50 top-12 right-16 rounded-2xl cursor-pointer"
    >
      <div style={{ fontFamily: "Montserrat" }} className='text-right uppercase'>
        <div className='hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1'>About</div>
        <div className='hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1'>Work</div>
        <div className='hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1'>Services</div>
        <div className='hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold'>Contact</div>
      </div>
    </div>
  )
}
