const setGap = 16;
const divideWidth = 7;
const divideHeight = 4;

import React, { useContext, useEffect, useRef, useState } from 'react';
import './Home.css';
import Cursor from '../Components/Cursor';
import GridBg from '../Components/GridBg';
import Navbar from '../Components/Navbar';
import { GlobalStateContext } from '../Context/GlobalStateProvider';

export default function Home() {

  const { oneGap, setOneGap, oneCellHeight, setOneCellHeight, oneCellWidth, setOneCellWidth } = useContext(GlobalStateContext);

  // <------------------------- Context updation ------------------------->
  const [parentHeight, setParentHeight] = useState(window.innerHeight);
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentHeight(window.innerHeight);
      setParentWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setOneGap(setGap);
    setOneCellWidth((parentWidth / divideWidth) - (setGap))
    setOneCellHeight((parentHeight / divideHeight) - (setGap))
  }, [parentHeight, setGap]);

  // ---------------------------------
  const ReactTextRef = useRef(null);

  useEffect(() => {
    const ReactTextAnimation = () => {
      if (!ReactTextRef.current) return;

      const ReactElement = ReactTextRef.current;

      const animationDuration = 5; // Random duration between 5s and 15s
      const keyframes = `@keyframes ReactTextAnimation { ` +
        `0% { background-position: 0% 0%; } ` +
        `25% { background-position: 25% 25%; } ` +
        `50% { background-position: 50% 50%; } ` +
        `75% { background-position: 75% 75%; } ` +
        `100% { background-position: 100% 100%; } ` +
        `}`;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      ReactElement.style.animation = `ReactTextAnimation ${animationDuration}s infinite alternate`;
      // element.style.animation = `breathe 8s linear infinite`;
    };

    ReactTextAnimation();
    const intervalId = setInterval(ReactTextAnimation, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className='z-0  flex flex-col items-center justify-center w-full h-screen text-center'
    >
      {/* <GridBg /> */}
      {/* <Cursor /> */}
      {/* <Navbar /> */}

      <div className=' z-30'>
        <div style={{ fontFamily: "Montserrat" }} className=' text-xl font-black text-[#888888]'>
          NAMASKAR !!!
        </div>
      </div>
      <div
        style={{ fontFamily: "Zain" }} // Zain
        // style={{ zIndex: 1, }}
        className=' z-30 w-screen  text-8xl font-black'>
        <div>Together, Let’s</div>
        <div>
          <span
            ref={ReactTextRef}
            style={{
              // display: 'inline-block', //
              background: 'linear-gradient(45deg, #65DCF8, #6EB7FF, #005FEA, #504FFB)',
              // backgroundClip: 'text', //
              WebkitBackgroundClip: 'text',
              // color: 'transparent',
              WebkitTextFillColor: 'transparent',
              // textFillColor: 'transparent', //
              backgroundSize: '1000% 1000%',
              // animation: 'gradient-animation 3s ease infinite',
            }}
          >
            React
          </span> to Your Vision!
        </div>
      </div>
      {/* Montserrat */}
      {/* <div style={{ fontFamily: "Montserrat" }} className=' text-xl font-normal text-[#888888]'>
          <div>
            Where Your Ideas
            <span> React</span>
          </div>
          <div>with Creative Code</div>
        </div>
      </div> */}

    </div>
  );
}



// import React from 'react';
// import gridSvg from '../assets/grid.svg'; // Adjust the path if necessary

// const Home = () => {
//   const divStyle = {
//     backgroundImage: `url(${gridSvg})`,
//     backgroundSize: 'cover', // Adjust as needed
//     backgroundPosition: 'center', // Adjust as needed
//     height: '100vh', // Adjust as needed
//     width: '100%', // Adjust as needed
//   };

//   return (
//     <div style={divStyle}>
//       {/* Your other content */}
//     </div>
//   );
// };

// export default Home;
