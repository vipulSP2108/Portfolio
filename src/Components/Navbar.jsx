// import React from 'react'
// import '../App.css';
// import { FaArrowUp } from 'react-icons/fa6';

// export default function Navbar() {
//   return (
//     <>

// 
//       </div>

//       <div className=' fixed z-50 p-[7px] top-12 left-10 justify-between rounded-full'
//         id='glasses'
//       >
//         <div className=' w-20 rounded-full h-9 bg-black'></div>
//       </div >
//       <div className=' fixed z-50 p-[7px] top-12 right-10 justify-between rounded-full'
//         id='glasses'
//       >
//         <div className='bg-[#2272EF] w-20 rounded-full h-9 flex items-center justify-center'>
//           <FaArrowUp color='#fff' />
//         </div>
//       </div >

//     </>


//   )
// }


import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import './Navbar.css'; // Import the CSS file
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div className={`navbar ${scrollingUp ? 'show' : 'hide'} fixed z-50 p-[7px] top-12 right-10 justify-between rounded-full`} id='glasses'>
        <div style={{ fontFamily: "Zain" }} className=' bg-white flex text-black p-1 gap-6 rounded-full items-center'>
          <div className='w-20 rounded-full h-9 p-1 bg-white overflow-hidden'>
          <img className='' src={logo} alt="Logo" />
          </div>
          <div className='text-lg text-[#131821]'>About</div>
          <div className='text-lg text-[#131821]'>Work</div>
          <div className='text-lg text-[#131821]'>Services</div>
          <div className='text-lg text-[#131821]'>Contact</div>
          <div className='bg-[#2272EF] w-20 rounded-full h-9 flex items-center justify-center'>
            <FaArrowUp color='#fff' />
          </div>
        </div>
      </div>
      {!scrollingUp && (
        <>
          <div className={`navbar ${scrollingUp ? 'hide' : 'show'}  fixed z-50 p-[7px] top-12 left-10 justify-between rounded-full`} id='glasses'>
          <div className='w-20 rounded-full h-9 p-1 bg-white overflow-hidden'>
          <img className='' src={logo} alt="Logo" />
          </div>
          </div>
          <div className={`navbar ${scrollingUp ? 'hide' : 'show'}  fixed z-50 p-[7px] top-12 right-10 justify-between rounded-full`} id='glasses'>
            <div className='bg-[#2272EF] w-20 rounded-full h-9 flex items-center justify-center'>
              <FaArrowUp color='#fff' />
            </div>
          </div>
        </>
      )}
    </>
  );
}




// <>
//   <div className='p-[7px] fixed z-50 top-12 px-10 left-10 flex rounded-full ' id='glasses'>
//     <div className=' w-20 rounded-full h-8 bg-black'></div>
//   </div>
//   <div className='p-[7px] fixed z-50 top-12 right-10 text-right '
//   // id='glasses'
//   >
//     <div className=' -mb-1 text-lg text-white'>About</div>
//     <div className=' -mb-1 text-lg text-white'>Work</div>
//     <div className=' -mb-1 text-lg text-white'>Services</div>
//     <div className=' -mb-1 text-lg text-white'>Contact</div>
//   </div>
// </>