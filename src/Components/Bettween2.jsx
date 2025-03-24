import './Bettween2.css'; 
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Between2() {
    useEffect(() => {
        // GSAP animation setup
        gsap.to(".text p", {
            backgroundPositionX: "0%",
            stagger: 0.3, // Shorter delay between each element's animation
            duration: 0.4, // Short duration for quick animation
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".text",
                scrub: true, // Sync the animation with scroll
                start: "top 100%", // Start the animation when the top of the element reaches 80% from the top of the viewport
                end: "bottom 70%", // End the animation when the bottom of the element is 10% from the bottom of the viewport
                // markers: true // Disable markers for a cleaner view
            }
        });
    }, []);

    return (
        <div className='flex flex-col justify-center items-center py-36 gap-4'>
            <div className='z-30 flex items-center justify-center text-lg md:text-xl tracking-widest'>
                <text style={{fontFamily:'Montserrat'}} className='text-[#888888] uppercase'>Moto</text>
            </div>
            <div  className='z-30 flex flex-col items-center justify-center text'>
                <p className='text-7xl md:text-8xl font-black'>Design the experience,</p>
                <p className='text-7xl md:text-8xl font-black'>develop the future!</p>
            </div>
        </div>
    );
}
