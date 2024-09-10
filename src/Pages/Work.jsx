import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Home.css';
import imageMy from '../assets/My.jpg';
import { gsap } from 'gsap';
import MoboDashboard from '../assets/MoboDashboard.png';

const imgSources = [imageMy, MoboDashboard, imageMy, MoboDashboard, imageMy];
const outlets = [
    { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
    { cat: 'WEB', name: "CITES", companyName: "Another Company", category: "Self Challenge" },
    { cat: 'WEB', name: "Child", companyName: "Yet Another Company", category: "Self Challenge" },
    { cat: 'APP', name: "ArgyleEnigma Labs", companyName: "ArgyleEnigma Labs", category: "Design & Development" },
    { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" }
];

export default function Work() {
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
        <div style={{ userSelect: 'none' }} className='z-0 flex flex-col h-screen'>
            <div className='z-30 flex-1 flex flex-col justify-center' id='glasses'>
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
                            >
                                <span id='info'><p>{outlet.cat}</p></span>
                                <span id='name'><p>{outlet.name}</p></span>
                                <span id='tag'><p>{outlet.category}</p></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}











// import React, { useState, useRef, useEffect } from 'react';
// import './Home.css';
// import imageMy from '../assets/My.jpg';
// import { gsap } from "gsap";
// import MoboDashboard from '../assets/MoboDashboard.png';
// const imgSources = [
//     imageMy,
//     MoboDashboard,
//     imageMy,
//     MoboDashboard,
//     imageMy
// ];

// const outlets = [
//     { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
//     { cat: 'WEB', name: "CITES", companyName: "Another Company", category: "Self Challenge" },
//     { cat: 'WEB', name: "Child", companyName: "Yet Another Company", category: "Self Challenge" },
//     { cat: 'APP', name: "ArgyleEnigma Labs", companyName: "ArgyleEnigma Labs", category: "Design & Development" },
//     { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" }
// ];

// export default function Work() {
//     const [hoveredItem, setHoveredItem] = useState(null);
//     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//     // const imageRef = useRef(null);

//     // Handle mouse over for each menu item
//     // const handleMouseOver = (index) => {
//     //     setHoveredItem(imgSources[index]);
//     // };

//     // // Handle mouse out to reset preview
//     // const handleMouseOut = () => {
//     //     setHoveredItem(null);
//     // };

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setCursorPosition({ x: e.clientX + 10, y: e.clientY + 10 });
//         };

//         document.addEventListener("mousemove", handleMouseMove);
//         return () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//         };
//     }, []);

//     // useEffect(() => {
//     //     if (imageRef.current) {
//     //         gsap.to(imageRef.current, {
//     //             opacity: hoveredItem ? 1 : 0,
//     //             duration: 0.5,
//     //             ease: "power3.out"
//     //         });
//     //     }
//     // }, [hoveredItem]);









//     const menuItemsRef = useRef([]);
//     const preview1Ref = useRef(null);
//     const preview2Ref = useRef(null);

//     useEffect(() => {
//         const menuItems = menuItemsRef.current;

//         const handleMouseOver = (index) => {
//             gsap.to(menuItems[index].querySelectorAll("p:nth-child(1)"), {
//                 // top: "0%",
//                 top: "-100%",
//                 duration: 0.3,
//             });
//             gsap.to(menuItems[index].querySelectorAll("p:nth-child(2)"), {
//                 top: "0%",
//                 duration: 0.3,
//             });

//             appendImages(imgSources[index]);
//         };

//         const handleMouseOut = (index) => {
//             // gsap.to(menuItems[index].querySelectorAll("p:nth-child(1)"), {
//             //     top: "0%",
//             //     duration: 0.3,
//             // });
//             // gsap.to(menuItems[index].querySelectorAll("p:nth-child(2)"), {
//             //     top: "100%",
//             //     duration: 0.3,
//             // });
//             // gsap.to('#priview div', {
//             //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             //     duration: 1,
//             //     ease: 'power3.out',
//             //     onComplete: () => {
//             //         removeExtraImage(preview1);
//             //         removeExtraImage(preview2);
//             //     }
//             // });

//             removeExtraImage(preview1Ref.current);
//             removeExtraImage(preview2Ref.current);
//         };

//         menuItems.forEach((item, index) => {
//             item.addEventListener("mouseover", () => handleMouseOver(index));
//             item.addEventListener("mouseout", () => handleMouseOut(index));
//         });

//         return () => {
//             menuItems.forEach((item, index) => {
//                 item.removeEventListener("mouseover", () => handleMouseOver(index));
//                 item.removeEventListener("mouseout", () => handleMouseOut(index));
//             });
//         };
//     }, []);

//     const appendImages = (src) => {
//         const preview1 = preview1Ref.current;
//         const preview2 = preview2Ref.current;

//         if (!preview1 || !preview2) return;

//         const img1 = document.createElement("img");
//         const img2 = document.createElement("img");

//         img1.src = src;
//         img2.src = src;

//         img1.classList.add("preview-img1");
//         img2.classList.add("preview-img2");

//         // preview1.innerHTML = ''; // Clear previous images
//         // preview2.innerHTML = '';

//         preview1.appendChild(img1);
//         preview2.appendChild(img2);

//         gsap.to([img1, img2], {
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             duration: 1,
//             ease: 'power3.out',
//             // onComplete: () => {
//             //     removeExtraImage(preview1);
//             //     removeExtraImage(preview2);
//             // }
//         });
//     };

//     const removeExtraImage = (container) => {
//         while (container.children.length > 1) {
//             container.removeChild(container.firstChild);
//         }
//     };

//     return (
//         <div style={{ userSelect: 'none' }} className='z-0 flex flex-col h-screen'>
//             <div className='z-30 flex-1 flex flex-col justify-center' id='glasses'>
//                 <div className='flex items-center justify-center mb-12'>
//                     <span style={{ fontFamily: 'Montserrat' }} className='uppercase'>Explore Work</span>
//                 </div>

//                 {/*                 
//                 <div
//                     className='preview'
//                     style={{
//                         position: 'absolute',
//                         // top: cursorPosition.y,
//                         // left: cursorPosition.x,
//                         width: '225px',
//                         height: '275px',
//                         zIndex: 2,
//                         pointerEvents: 'none',
//                         overflow: 'hidden'
//                     }}
//                 >
//                     <img
//                         ref={imageRef}
//                         src={hoveredItem || ''}
//                         alt="Preview"
//                         style={{
//                             width: '100%',
//                             height: '100%',
//                             objectFit: 'cover',
//                             opacity: 0,
//                             transition: 'opacity 0.5s ease'
//                         }}
//                     />
//                 </div> */}

//                 <div id="priview"
//                     style={{
//                         top: cursorPosition.y,
//                         left: cursorPosition.x,
//                     }}
//                 >
//                     <div className='priviewimg priviewimg1' ref={preview1Ref} ></div>
//                     <div className='priviewimg priviewimg2' ref={preview2Ref} ></div>
//                 </div>

//                 <div id='menu'>
//                     {outlets.map((outlet, index) => (
//                         <div
//                             onMouseOver={() => handleMouseOver(index)}
//                             onMouseOut={() => handleMouseOut(index)}
//                             ref={el => menuItemsRef.current[index] = el}
//                             id='menuitem'
//                             key={index}
//                             style={{
//                                 overflow: 'hidden',
//                                 // backgroundColor: 'red',
//                                 borderBottomWidth: '1px',
//                                 borderTopWidth: index === 0 ? '1px' : '0',
//                                 borderColor: '#888888',
//                                 cursor: 'pointer',
//                             }}
//                             className='px-36 flex w-full gap-2'
//                         >

//                             {/* <div className='px-36 flex  gap-2'> */}
//                                 <span id='info'><p>{outlet.cat}</p></span>
//                                 <span id='name' style={{ fontFamily: 'Montserrat' }} className='text-6xl font-extrabold uppercase'><p>{outlet.name}</p></span>
//                                 <span id='tag'><p>{outlet.category}</p></span>
//                             {/* </div> */}
//                             {/* <div className=' absolute px-36 flex  gap-2'>
//                                 <span id='info'><p>{outlet.cat}</p></span>
//                                 <span id='name' style={{ fontFamily: 'Montserrat' }} className='text-6xl font-extrabold uppercase'><p>{outlet.name}</p></span>
//                                 <span id='tag'><p>{outlet.category}</p></span>
//                             </div> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
