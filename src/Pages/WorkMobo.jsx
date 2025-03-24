import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function WorkMobo({ imgSources, projectList, noNavigation = false }) {
    const menuItemsRef = useRef([]);

    const navigate = useNavigate();

    const handleClick = (project) => {
        if (!noNavigation) {
            return null
        }
        navigate('/ProjectDetails', { state: { project } });
    };


    useEffect(() => {
        // GSAP animation setup
        gsap.to("#name p", {
            backgroundPositionX: "0%",
            stagger: 1, // Shorter delay between each element's animation
            duration: 10, // Short duration for quick animation
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#name", // Change to the correct selector
                scrub: true,
                start: "top 100%",
                end: "bottom 10%",
                // markers: true // Set markers to true only for debugging
            }
        });
    }, []);

    return (
        <div >
            <div 
            >
                {projectList.map((project, index) => (
                    <div
                        ref={el => menuItemsRef.current[index] = el}
                        id='menuitem'
                        key={index}
                        style={{
                            overflow: 'hidden',
                            // backgroundColor: 'red',
                            borderBottomWidth: '1px',
                            borderTopWidth: index === 0 ? '1px' : '0',
                            borderColor: '#888888',
                            cursor: 'pointer',
                        }}
                        className='flex justify-between'
                        onClick={() => handleClick(project)}
                    >
                        <span id='name'>
                            <p
                                className='text-3xl'
                                style={{
                                    fontFamily: 'Montserrat',
                                    textTransform: 'uppercase',
                                    fontWeight: 800,
                                    whiteSpace: 'nowrap',  // Prevents the text from wrapping to the next line
                                    overflow: 'hidden',  // Hides the overflowed text
                                    textOverflow: 'ellipsis',  // Adds ellipsis (...) if text overflows
                                }}
                            >
                                {project.name}
                            </p>
                        </span>
                    </div>
                ))}

            </div>

        </div>
    );
}