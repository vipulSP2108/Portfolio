import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Between1() {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger GSAP animations when the element is in view
                        gsap.fromTo(
                            '.animate-text', 
                            { opacity: 0, y: 50 }, 
                            { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
                        );

                        gsap.fromTo(
                            '.animate-box', 
                            { opacity: 0, scale: 0.5 }, 
                            { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
                        );

                        // Once the animation has been triggered, stop observing
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div 
            className='z-0 flex justify-center items-center py-24 gap-4 uppercase' 
            ref={containerRef}
        >
            {/* <text>We won Awards</text> */}
            <div className='z-30 flex items-center justify-center'>
                <text 
                    style={{ fontFamily: 'Montserrat' }} 
                    className='uppercase animate-text'
                >
                    achieved so far
                </text>
            </div>

            <div className='z-30 rounded-full bg-[#2272EF] flex gap-7 px-4 animate-box'>
                <text className='animate-text'>Awards</text>
                <text className='animate-text'>Awards</text>
                <text className='animate-text'>Awards</text>
            </div>
        </div>
    );
}
