import React from 'react'
import WordAnimation from './WordAnimation'

export default function NavbarTop() {
  return (
    <div 
    className={`navbar fixed z-50 px-[10px] top-5 right-4 md:px-[30px] md:top-12 md:right-10 justify-between`}
    // className="fixed z-50 top-12 right-16 rounded-2xl cursor-pointer"
    >
      <div style={{ fontFamily: "Montserrat" }} className='text-right uppercase'>
        <div>
          {/* <WordAnimation styleGiven={'hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1'} projectList={['About', 'Work']}/> */}
          <WordAnimation styleGiven=" text-[#888888] text-xs md:text-sm font-bold" gapProvided={3} projectList={['About', 'Work', 'Contact']} />
          </div>
        <div className='hover:text-[#fff] text-[#888888] text-xs md:text-sm font-bold mb-1'>Work</div>
      </div>
    </div>
  )
}
