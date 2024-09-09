import React, { useEffect, useRef, useState } from 'react';
import './GridBg.css';
import gridSvg from '../assets/grid.svg';

export default function GridBg() {
    const [curr, setCurr] = useState(0);
    const bgRef = useRef(null);
  
    // const cursorOutline = useRef(null);
    // const cursorDot = useRef(null);
  
    const numberOfDivs = 21; // Total number of divs
    const portionHeight = window.innerHeight / numberOfDivs;
    const divSize = 50; // Size of the div (both width and height)
  
    // Function to generate a random starting position within the size limits
    const getRandomPosition = (max, size) => Math.floor(Math.random() * (max - size));
  
    // Function to generate random movement direction
    const getRandomDirection = () => ({ x: Math.random() > 0.5 ? 1 : -1, y: Math.random() > 0.5 ? 1 : -1 });
  
    // Initialize divs with random starting positions and directions
    const [divs, setDivs] = useState(
      Array.from({ length: numberOfDivs }, (_, index) => ({
        id: index + 1,
        top: getRandomPosition(window.innerHeight, divSize),
        left: getRandomPosition(window.innerWidth, divSize),
        direction: getRandomDirection(),
        animation: 'fade-in', // Apply fade-in animation initially
      }))
    );
  
    useEffect(() => {
      const moveDivs = () => {
        setDivs(prevDivs =>
          prevDivs.map(div => {
            const maxLeft = window.innerWidth - divSize;
            const maxTop = window.innerHeight - divSize;
  
            // Calculate new position
            let newLeft = div.left + div.direction.x * 5;
            let newTop = div.top + div.direction.y * 5;
  
            // Boundary collision logic
            if (newLeft < 0 || newLeft > maxLeft) {
              newLeft = Math.max(0, Math.min(newLeft, maxLeft));
              div.direction.x = -div.direction.x;
            }
            if (newTop < 0 || newTop > maxTop) {
              newTop = Math.max(0, Math.min(newTop, maxTop));
              div.direction.y = -div.direction.y;
            }
  
            return { ...div, left: newLeft, top: newTop };
          })
        );
      };
  
      const resetDivs = () => {
        setDivs(prevDivs =>
          prevDivs.map(div => ({
            ...div,
            top: getRandomPosition(window.innerHeight, divSize),
            left: getRandomPosition(window.innerWidth, divSize),
            direction: getRandomDirection(),
            animation: 'fade-out', // Apply fade-out animation when resetting
          }))
        );
      };
  
      // Move divs every 30ms
      const moveInterval = setInterval(moveDivs, 70);
  
      // Reset positions and directions every 5 seconds
      const resetInterval = setInterval(() => {
        // Apply fade-out effect before resetting
        setDivs(prevDivs =>
          prevDivs.map(div => ({
            ...div,
            animation: 'fade-out',
          }))
        );
        setTimeout(() => {
          resetDivs();
        }, 1000); // Wait for the fade-out animation to complete
      }, 3000);
  
      return () => {
        clearInterval(moveInterval);
        clearInterval(resetInterval);
      };
    }, []);
  
    useEffect(() => {
      const randomizeAnimation = () => {
        if (!bgRef.current) return;
  
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  
        function getRandomAngle(min, max) {
          var c = Math.floor(Math.random() * (max - min + 1)) + min
          setCurr(c)
          return c;
        }
  
        const maxVal = 50;
        const minVal = -50;
  
        const element = bgRef.current;
        const animationDuration = 30; // Random duration between 5s and 15s
        const keyframes = `@keyframes one { ` +
          `0% { left: -10px; top: 10px; transform: rotate(0deg) scale(1); } ` +
          `25% { left: 10px; top: 10px; transform: rotate(90deg) scale(0.8); } ` +
          `50% { left: 10px; top: -10px; transform: rotate(180deg) scale(1.1); } ` +
          `75% { left: -10px; top: -10px; transform: rotate(270deg) scale(0.9); } ` +
          `100% { left: -10px; top: 10px; transform: rotate(360deg) scale(1); } ` +
          `}`;
  
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
  
        element.style.animation = `one ${animationDuration}s infinite`;
        // element.style.animation = `breathe 8s linear infinite`;
      };
  
      randomizeAnimation();
      const intervalId = setInterval(randomizeAnimation, 10000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className=' sticky top-0 bg-[#171C24]'>
        <div
        style={{
          backgroundImage: `url(${gridSvg})`,
          backgroundSize: `500px`,
        }}
        className='z-10 hex-grid top-0 left-0 absolute w-full h-screen bg-repeat'
      />
      {divs.map(div => (
        <div
          key={div.id}
          className={`z-0 ${div.animation}`} // Apply animation classes
          style={{
            filter: 'blur(10px)',
            background: `linear-gradient(90deg, #335bf4 0%, #2ae9c9 100%)`,
            position: 'absolute',
            top: div.top,
            left: div.left,
            width: divSize,
            height: divSize,
          }}
        />
      ))}
      {/* <div
        style={{
          backgroundImage: `url(${gridSvg})`,
          backgroundSize: `500px`,
        }}
        className='z-10 hex-grid top-0 left-0 absolute w-full h-full bg-repeat'
      />
      <div
      style={{
        filter: 'blur(15px)',
        background: `linear-gradient(90deg, #335bf4 0%, #2ae9c9 100%)`,
      }}
      className=' z-0 absolute w-20 h-20'/> */}
    </div>
  )
}
