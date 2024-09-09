import React, { useState, useRef } from 'react';

export default function Projects() {
    const [hoveredItemIndex, setHoveredItemIndex] = useState(11);
    const indicatorRef = useRef(null);
    const galleryContainerRef = useRef(null);

    const galleryItemsArray = Array(16).fill(null); // Adjust as needed for the number of items

    const handleMouseEnter = (index) => {
        setHoveredItemIndex(index);
    };

    const handleMouseMove = (e) => {
        if (indicatorRef.current && galleryContainerRef.current) {
            const { left } = galleryContainerRef.current.getBoundingClientRect();
            indicatorRef.current.style.left = `${e.clientX - left}px`;
        }
    };

    return (
        <div
            style={{ userSelect: 'none' }}
            className='z-30 flex items-center justify-center px-52 h-screen'
            onMouseMove={handleMouseMove}
            ref={galleryContainerRef}
        >
            <div className=' overflow-hidden'>
                <div id='gallary' style={{ display: 'flex', justifyContent: 'space-around', width: '100%', overflow: 'hidden' }}>
                    {galleryItemsArray.map((_, index) => (
                        <div
                            key={index}
                            id='gallary-item'
                            className=' flex items-center justify-center overflow-hidden'
                            style={{
                                flex: hoveredItemIndex === index ? '1 1 450px' : '0 1 20px',
                                height: '350px',
                                margin: '0 5px',
                                transition: 'flex 1s cubic-bezier(0.075, 0.82, 0.165, 1)',
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            <div
                                // id='gallary-item-div'
                                style={{
                                    width: '450px',
                                    height: '100%',
                                    // background: 'url(https://assets-global.website-files.com/641ef7ac927bd55e5b0aa762/653670a6bf5aa08269455f1d_Magic.webp)',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    objectFit: 'contain',
                                    // transform: 'scale(2)',
                                }}
                                className='bg-[#556172] flex items-center justify-center overflow-hidden'
                                id='glass'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}