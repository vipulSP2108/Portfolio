import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

export default function Projects() {
    const [hoveredItemIndex, setHoveredItemIndex] = useState(11);
    const indicatorRef = useRef(null);
    const galleryContainerRef = useRef(null);

    // const galleryItemsArray = Array(16).fill(null); // Adjust as needed for the number of items
    const [galleryItemsArray, setGalleryItemsArray] = useState([]); // Initially empty, to be set dynamically

    const handleMouseEnter = (index) => {
        setHoveredItemIndex(index);
    };

    const handleMouseMove = (e) => {
        if (indicatorRef.current && galleryContainerRef.current) {
            const { left } = galleryContainerRef.current.getBoundingClientRect();
            indicatorRef.current.style.left = `${e.clientX - left}px`;
        }
    };

    const screenWidth = window.innerWidth;

     // Dynamically set the gallery items based on screen width
     const updateGalleryItems = () => {


        const itemsCount = Math.floor((screenWidth / 210)**1.5)

        setGalleryItemsArray(Array(itemsCount).fill(null)); 

        // // Example: Adjust the number of items based on screen width
        // if (screenWidth >= 1290) {
        //     // Large screens (desktops, large laptops)
        //     setGalleryItemsArray(Array(24).fill(null)); // Show 24 items for large screens
        // } else if (screenWidth >= 1268) {
        //     // Medium screens (tablets, smaller laptops)
        //     setGalleryItemsArray(Array(16).fill(null)); // Show 16 items for medium screens
        // } else {
        //     // Small screens (mobile devices)
        //     setGalleryItemsArray(Array(8).fill(null)); // Show 8 items for small screens
        // }
    };

    useEffect(() => {
        // Initial call to set the gallery items when the component is mounted
        updateGalleryItems();

        // Add event listener to update items on window resize
        window.addEventListener('resize', updateGalleryItems);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateGalleryItems);
        };
    }, []);

    return (
        <div
            style={{ userSelect: 'none' }}
            className={`z-30 flex items-center justify-center px-52 h-screen`}
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
                                flex: hoveredItemIndex === index ? '1 1 ' : '0 1 20px',
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