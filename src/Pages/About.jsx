import React, { useEffect, useRef } from 'react'
import '../App.css';
import imageMy from '../assets/My.jpg';
import html from '../assets/html.png';
import javascriptweb from '../assets/javascriptweb.png';
import react from '../assets/react.png';
import tailwindcss from '../assets/tailwindcss.svg';
import Scroller from './Scroller';
import gsap from "gsap";
import SkillsData from '../data/SkillsData';
import { FiExternalLink } from 'react-icons/fi';


const textItems = [
    // { src: 'https://i.pravatar.cc/150?img=1', alt: 'Avatar 1' },
    `UI/UX Developer`,
    'Web Design',
    'AppDesign',
    'App Developer',
    'Frontend Developer'
];

const imageTechItems = [
    // 'WEB',
    { src: javascriptweb, alt: 'Avatar 1' },
];

const image2TechItems = [
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
    { src: 'https://m.media-amazon.com/images/I/61TYXoZohPL._SX679_.jpg', alt: 'Avatar 1' },
];

//   const imageItems = [
//     { src: 'https://i.pravatar.cc/150?img=1', alt: 'Avatar 1' },
//     { src: 'https://i.pravatar.cc/150?img=2', alt: 'Avatar 2' },
//     { src: 'https://i.pravatar.cc/150?img=3', alt: 'Avatar 3' },
//     { src: 'https://i.pravatar.cc/150?img=4', alt: 'Avatar 4' },
//     { src: 'https://i.pravatar.cc/150?img=5', alt: 'Avatar 5' },
//     { src: 'https://i.pravatar.cc/150?img=6', alt: 'Avatar 6' }
//   ];
// gsap.from('#gasss', {
//     y: 90,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#gasss",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 3
//     }
// })



export default function About() {
    const containerRef = useRef(null);

    // main - scale
    // aka - left to right - no scale - opacity
    // quote be happy - bottom to top - no scale - opacity
    // techstack - right to left - no scale - opacity
    // skills - bottom to top - no scale - opacity

    useEffect(() => {
        const element = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger GSAP animations when the element is in view
                        // gsap.fromTo(
                        //     '.animate-text', 
                        //     { opacity: 0, y: 50 }, 
                        //     { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
                        // );

                        gsap.fromTo(
                            '.about-apk-box',
                            { opacity: 0, y: 50, scale: 0.5 },
                            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
                        );

                        // Once the animation has been triggered, stop observing
                        // observer.unobserve(element);
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
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col  px-16 my-12 h-screen'>
            <div
                ref={containerRef}
                className=' z-30 flex-1 flex flex-col justify-evenly rounded-2xl about-main'
                id='glasses'
            >
                <div className=' flex items-center justify-center'>
                    <text style={{ fontFamily: 'Montserrat' }} className=' uppercase text-[#888888]'>Who I am</text>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className=' gap-4 flex flex-col items-end'>
                        <div className='gap-4 flex flex-row items-center'>
                            <div
                                className=' rounded-2xl w-[12rem] h-[11rem] px-3 py-2 flex flex-col justify-between about-aka'
                                id='glasses'

                            >
                                <div>
                                    <text style={{ fontFamily: 'Montserrat' }} className='font-black'>AKA.</text>
                                    <text className=' text-2xl font-black text-[#2272EF]'> Aayush.</text>
                                </div>
                            </div>
                            <div
                                className='  py-3 px-2 rounded-2xl w-[14rem] h-[17rem] flex flex-col justify-between'
                                id='glasses'
                                // bg-[rgb(34,114,239)]
                                style={{ background: 'rgba(34, 114, 239, 0.9)' }}
                            >
                                {/* <text style={{fontFamily: 'Montserrat'}} className='font-black'>Vipul Sunil Patil</text>
                            <text style={{ lineHeight: 0.9}} className=' text-[#888888]'>{`Hello there! 👋,`}<br />{`I'm versatile web and app developer, and designer with a passion for crafting engaging and user-friendly digital experiences.`}</text> */}

                                <div className=' overflow-hidden w-full h-[80%] rounded-2xl'>
                                    <img className='' src={imageMy} alt="My Image" />
                                </div>
                                <div className=' overflow-hidden w-full h-[20%] flex items-center p-1'>
                                    <text>Vipul Sunil Patil</text>
                                </div>
                            </div>
                        </div>
                        <div id=' gasss' className=' about-skills'>
                            <div className='bg-black rounded-2xl w-[21rem] h-[4rem] flex overflow-hidden'
                            // id='glasses'
                            >
                                <Scroller items={textItems} topbottom='false' direction="left" speed="fast" />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-4'>
                        <div
                            className=' bg-black rounded-2xl w-[21rem] h-[4rem] flex flex-col justify-center items-center about-quote'
                        // id='glasses'
                        >
                            <text className=' text-[#888888] mt-1'>'Stay Happy, Not Depressed!'</text>
                        </div>
                        <div
                            className='rounded-2xl w-[14rem] h-[12rem] about-techstack'
                            id='glasses'
                        >
                            <div className=' p-3 flex justify-end h-full overflow-hidden gap-3'>
                                <div className='z-40 absolute flex flex-col bottom-2 left-2 '>
                                    {/* <div className=' text-lg flex gap-1 '>
                                        <text className=' text-[#888888] capitalize'>Details </text>
                                        <div className=' bottom-10'>
                                            <FiExternalLink size={18} color='#888888' />
                                        </div>
                                    </div> */}
                                    <text className=' text-[#888888] capitalize'>currenty using,</text>
                                    <text style={{ fontFamily: 'Montserrat' }} className=' font-black'>Tech I ♥️</text>
                                </div>

                                <div className=' opacity-90'>
                                    {/* <Scroller items={SkillsData} topbottom='true' direction="bottom" speed="slow" /> */}
                                </div>
                                <div className=' opacity-90'>
                                    {/* <Scroller items={SkillsData} topbottom='true' direction="top" speed="slow" /> */}
                                </div>
                            </div>

                            {/* <text style={{ lineHeight: 0.9 }} className=' text-[#888888]'>
                            {`UI/UX Devloper`}<br />
                            {`Web Design`}<br />
                            {`App Design`}<br />
                            {`App Devloper`}<br />
                            {`Frontent Devloper`}<br />
                        </text> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <text style={{ fontFamily: 'Montserrat' }} className=' font-black h-full left-0 flex items-center justify-center p-4'> STACK</text>
                        <div className='  flex overflow-hidden'>
                            <div className=' h-[4rem] w-[4rem] flex items-center justify-center'>
                                <img src={javascriptweb} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={tailwindcss} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={react} alt="Logo" />
                            </div>
                            <div className=' w-[3.2rem] flex items-center justify-center'>
                                <img src={html} alt="Logo" />
                            </div>
                        </div> */}