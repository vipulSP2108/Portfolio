// import React, { useEffect, useRef } from 'react'

// export default function Cursor() {
//     const cursorOutline = useRef(null);
//     const cursorDot = useRef(null);
//     const bgRef = useRef(null);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const posX = e.clientX;
//             const posY = e.clientY;

//             if (cursorOutline.current) {
//                 cursorOutline.current.animate([
//                     {
//                         left: `${posX}px`,
//                         top: `${posY}px`
//                     },
//                 ], { duration: 500, fill: 'forwards' });
//             }

//             if (cursorDot.current) {
//                 cursorDot.current.style.left = `${posX}px`;
//                 cursorDot.current.style.top = `${posY}px`;
//             }

//             // if (divRef.current) {
//             //     divRef.current.animate([
//             //         {
//             //             left: `${posX}px`,
//             //             top: `${posY}px`
//             //         },
//             //     ], { duration: 500, fill: 'forwards' });
//             // }

//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div className='cursor flex items-center justify-center'>
//             <div ref={cursorOutline} className='  z-20 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
//                 <div className=' z-20 fixed h-14 w-14  rounded-full border-2 border-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'></div>
//                 <div
//                     style={{
//                         opacity: 0.87,
//                         filter: 'blur(60px)',
//                         position: 'relative',
//                         width: '300px',
//                         height: '400px', borderRadius: '9999px',
//                         // background: `linear-gradient(90deg, #3effe8 1.98%, #3effe8 1.99%, #8c0fee)`,
//                         background: `linear-gradient(90deg, rgb(140, 0, 215) 1.98%, rgb(225, 72, 173) 1.99%, rgb(30, 0, 225))`,
//                     }}
//                     ref={bgRef}
//                 />
//             </div>
//             <div ref={cursorDot} className=' z-50 fixed h-4 w-4 bg-black rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' />
//         </div>
//     )
// }




import React, { useEffect, useRef } from 'react'

export default function Cursor() {
    const cursorOutline = useRef(null);
    const cursorDot = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorOutline.current) {
                cursorOutline.current.animate([
                    {
                        left: `${posX}px`,
                        top: `${posY}px`
                    },
                ], { duration: 500, fill: 'forwards' });
            }

            if (cursorDot.current) {
                cursorDot.current.style.left = `${posX}px`;
                cursorDot.current.style.top = `${posY}px`;
            }

            if (divRef.current) {
                divRef.current.animate([
                    {
                        left: `${posX}px`,
                        top: `${posY}px`
                    },
                ], { duration: 500, fill: 'forwards' });
            }

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
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
        //   element.style.animation = `breathe 8s linear infinite`;
        };
    
        randomizeAnimation();
        const intervalId = setInterval(randomizeAnimation, 10000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div className=' z-0 fixed top-0 left-0'>
            <div ref={cursorOutline} className='absolute -translate-x-1/2 -translate-y-1/2'>
                <div className=' z-20 fixed w-full h-full flex items-center justify-center'>
                    <div className=' h-14 w-14 border-black border-2 rounded-full' />
                </div>
                <div
                    style={{
                        zIndex: 10,
                        opacity: 0.97,
                        filter: 'blur(60px)',
                        position: 'relative', // Comment if problem
                        width: '300px',
                        height: '400px', 
                        borderRadius: '9999px',
                        // background: `linear-gradient(90deg, #3effe8 1.98%, #3effe8 1.99%, #8c0fee)`,
                        background: `linear-gradient(90deg, rgb(140, 0, 215) 1.98%, rgb(225, 72, 173) 1.99%, rgb(30, 0, 225))`,
                    }}
                    ref={bgRef}
                />
            </div>
            <div ref={cursorDot} style={{ zIndex: 9999, position: 'fixed' }}  className='fixed h-4 w-4 bg-black rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' />
        </div>
    )
}