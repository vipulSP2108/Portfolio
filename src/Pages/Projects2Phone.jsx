import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects2Phone({textcont, sampleData}) {
    const navigate = useNavigate();

    const handleClick = (project) => {
        if (!noNavigation) {
            return null
        }
        navigate('/ProjectDetails', { state: { project } });
    };

    useEffect(() => {
        // GSAP animation setup
        gsap.to("#text", {
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
        <div className=' mt-36 mb-12'>
            <div className="px-6 flex items-start justify-start mb-10 md:mb-12">
                <span
                    style={{ fontFamily: 'Montserrat' }}
                    className="text-xs font-semibold uppercase z-30 tracking-[5px]"
                >
                    {textcont}
                </span>
            </div>

            <div className=''>
                {sampleData.map((project, index) => (
                    <div className="flex items-start justify-start" onClick={() => handleClick(project)}>
                        <span
                        id='text'
                            style={{
                                fontFamily: 'Montserrat',
                                textTransform: 'uppercase',
                                fontWeight: 800,
                                whiteSpace: 'nowrap',  // Prevents the text from wrapping to the next line
                                overflow: 'hidden',  // Hides the overflowed text
                                textOverflow: 'ellipsis',  // Adds ellipsis (...) if text overflows
                                borderBottomWidth: '1px',
                                borderTopWidth: index === 0 ? '1px' : '0',
                                borderColor: 'rgba(136, 136, 136, 0.3)',
                                cursor: 'pointer',
                            }}
                            className="pl-5 text-4xl font-semibold uppercase z-30 -tracking-[1px] p-2 w-full "
                        >
                            {project.name}
                        </span>
                    </div>
                ))}
            </div>

            <div id='info2' className='px-6 flex z-30 flex-row gap-3 mt-3'>
                <div className=' z-30 h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
                <div className='z-30 h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
                <div className='z-30 h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
            </div>
        </div>
    );
}
