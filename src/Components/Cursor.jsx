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

    return (
        <div className='cursor flex items-center justify-center'>
            <div ref={cursorOutline} className='  z-20 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className=' z-20 fixed h-14 w-14  rounded-full border-2 border-black top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'></div>
                <div
                    style={{
                        opacity: 0.87,
                        filter: 'blur(60px)',
                        position: 'relative',
                        width: '300px',
                        height: '400px', borderRadius: '9999px',
                        // background: `linear-gradient(90deg, #3effe8 1.98%, #3effe8 1.99%, #8c0fee)`,
                        background: `linear-gradient(90deg, rgb(140, 0, 215) 1.98%, rgb(225, 72, 173) 1.99%, rgb(30, 0, 225))`,
                    }}
                    ref={bgRef}
                />
            </div>
            <div ref={cursorDot} className=' z-50 fixed h-4 w-4 bg-black rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' />
        </div>
    )
}
