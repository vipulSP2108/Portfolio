import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Home.css';
import { gsap } from 'gsap';

export default function Work({ imgSources, outlets }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const preview1Ref = useRef(null);
    const preview2Ref = useRef(null);
    const priviewRef = useRef(null);


    // const menu = menuRef.current;
    // menu.addEventListener('mouseout', function () {
    //     gsap.to('#priviewimg img', {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    //         duration: 1,
    //         ease: 'power3.out',
    //     });
    // })

    useEffect(() => {
        const menuItems = menuItemsRef.current;

        // Append duplicate p elements
        menuItems.forEach((item) => {
            const copyElements = item.querySelectorAll("#info, #name, #tag");
            copyElements.forEach((div) => {
                const copy = div.querySelector("p");
                if (copy && div.querySelectorAll("p").length === 1) {
                    const duplicatecopy = document.createElement('p');
                    duplicatecopy.textContent = copy.textContent;
                    duplicatecopy.textContent = copy.textContent;
                    duplicatecopy.style.color = 'white';
                    duplicatecopy.style.fontFamily = 'Montserrat',
                        duplicatecopy.style.textTransform = 'uppercase',
                        duplicatecopy.style.fontWeight = 800,
                        duplicatecopy.style.height = '100%',
                        div.appendChild(duplicatecopy);
                }
            });
        });

        // Mouse event handlers
        const handleMouseOver = (index) => {
            const item = menuItemsRef.current[index];
            gsap.to(item.querySelectorAll("p:nth-child(1)"), {
                top: "-100%",
                duration: 0.3,
            });
            gsap.to(item.querySelectorAll("p:nth-child(2)"), {
                top: "0%",
                duration: 0.3,
            });
            appendImages(imgSources[index]);
        };

        const handleMouseOut = (index) => {
            const item = menuItemsRef.current[index];
            gsap.to(item.querySelectorAll("p:nth-child(1)"), {
                top: "0%",
                duration: 0.3,
            });
            gsap.to(item.querySelectorAll("p:nth-child(2)"), {
                top: "100%",
                duration: 0.3,
            });

        };

        // Append images and animate
        const appendImages = (src) => {
            const preview1 = preview1Ref.current;
            const preview2 = preview2Ref.current;
            if (!preview1 || !preview2) return;

            const img1 = document.createElement("img");
            const img2 = document.createElement("img");

            img1.src = src;
            img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
            img2.src = src;
            img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
            preview1.appendChild(img1);
            preview2.appendChild(img2);

            gsap.to([img1, img2], {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: 'power3.out',
                onComplete: () => {
                    removeExtraImage(preview1);
                    removeExtraImage(preview2);
                }
            });
        };

        const removeExtraImage = (container) => {
            while (container.children.length > 10) {
                container.removeChild(container.firstChild);
            }
        };

        // Event listeners
        menuItems.forEach((item, index) => {
            item.addEventListener("mouseover", () => handleMouseOver(index));
            item.addEventListener("mouseout", () => handleMouseOut(index));
        });

        // Clean up event listeners
        return () => {
            menuItems.forEach((item, index) => {
                item.removeEventListener("mouseover", () => handleMouseOver(index));
                item.removeEventListener("mouseout", () => handleMouseOut(index));
            });
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(priviewRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                ease: 'power3.out'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        // <div style={{ userSelect: 'none' }} className='z-0 flex flex-col h-screen'>
        //     <div className='z-30 flex-1 flex flex-col justify-center' id='glasses'>
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col  px-16 my-12  '>
            <div
                className=' z-30 flex-1 flex flex-col justify-center rounded-2xl'
                id='glasses'
                style={{ paddingTop: '90px', paddingBottom: '130px' }}
            >
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase'>Explore Work</span>
                </div>

                <div id='containors'>
                    <div ref={priviewRef} id="priview"
                        style={{
                            backgroundColor: 'white',
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                        }}
                    >
                        <div className='priviewimg priviewimg1' ref={preview1Ref}></div>
                        <div className='priviewimg priviewimg2' ref={preview2Ref}></div>
                    </div>

                    <div ref={menuRef} id='menu'>
                        {outlets.map((outlet, index) => (
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
                            >
                                {/* <span id='info'><p>{outlet.cat}</p></span> */}
                                <span id='info2'>{outlet.cat}</span>
                                <span id='name'><p
                                    style={{ fontFamily: 'Montserrat', textTransform: 'uppercase', fontWeight: 800, }}
                                >{outlet.name}</p></span>
                                <span id='tag'><p>{outlet.category}</p></span>
                            </div>
                        ))}
                        <div id='info2' className=' flex flex-row gap-3 mt-3'>
                            <div className=' w-5 h-5 bg-white rounded-full' />
                            <div className=' w-5 h-5 bg-white rounded-full' />
                            <div className=' w-5 h-5 bg-white rounded-full' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}