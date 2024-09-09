// npm i react-icons


// import React from 'react'

// export default function Movingbar() {
//     return (
//         <div id='scroll' >
//             <div id='righttoLeft'>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//             </div>
//             <div id='lefttoRight'>
//             <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//                 <p>Hellos bas base</p>
//             </div>
//         </div>
//     )
// }


/* ------------------------- Moving Bar with GSAP ----------------- */
import React, { useEffect } from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";

export default function Movingbar({ LeftTRight = true }) {

    const direction = -100;

    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;
        const arrows = document.querySelectorAll("#arrow");
        const tween = gsap.to("#marquee_part", {
            xPercent: direction,
            repeat: -1,
            duration: 5,
            ease: "linear",
            paused: false,
            totalProgress: 0.5
        });

        gsap.set("#marquee_inner", { xPercent: -50 });

        const handleScroll = () => {
            if (window.pageYOffset > currentScroll) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1,
            });

            arrows.forEach((arrow) => {
                if (isScrollingDown) {
                    arrow.classList.remove("active");
                } else {
                    arrow.classList.add("active");
                }
            });

            currentScroll = window.pageYOffset;
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section style={{ fontFamily: "Montserrat" }} className='z-30 relative text-3xl overflow-hidden bg-black uppercase flex' id="marquee">
            <div id="marquee_inner" className=' flex flex-row items-center '>
                {[...Array(7)].map((_, index) => (
                    <div id="marquee_part" className='flex items-center justify-center flex-shrink-0 ' key={index}>
                        <text >modern creative studio</text> 
                        {/* className=' mt-1' */}
                        <div id="arrow" className=' p-5'>
                            <FaArrowDown />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}