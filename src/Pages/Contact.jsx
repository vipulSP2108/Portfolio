// npm i react-icons

import React, { useState, useEffect, useRef } from 'react';
const setGap = 21;
const divideWidth = 7;
const divideHeight = 4;
import './Home.css';
import { FaArrowLeftLong, FaArrowRightLong, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { MagneticIcon } from '../Components/MagneticIcon';
import RotationText from '../Components/RotationText';

export default function Contact() {
    const [parentHeight, setParentHeight] = useState(window.innerHeight);
    const [parentWidth, setParentWidth] = useState(window.innerWidth);

    const [oneGap, setOneGap] = useState(0);
    const [oneCellHeight, setOneCellHeight] = useState(0);
    const [oneCellWidth, setOneCellWidth] = useState(0);

    // Update parentHeight on window resize
    useEffect(() => {
        const handleResize = () => {
            setParentHeight(window.innerHeight);
            setParentWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setOneGap(setGap);
        setOneCellWidth((parentWidth / divideWidth) - (setGap))
        setOneCellHeight((parentHeight / divideHeight) - (setGap))
    }, [parentHeight, setGap]);

    const [isHoveredonEmail, setIsHoveredonEmail] = useState(false);

    return (
        //0D1014 171C24
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col  bg-[#171C24] px-16 h-screen'>
            <div
                className='z-30 flex flex-col justify-center '
                style={{ gap: oneGap }}
            >
                <div className=' flex' style={{ gap: oneGap }}>

                    <div
                        style={{ background: 'url(https://assets-global.website-files.com/641ef7ac927bd55e5b0aa762/653670a6bf5aa08269455f1d_Magic.webp)', backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 3}px`, height: `${(oneCellHeight * 2) + (3 * oneGap)}px` }}
                        className='bg-[#556172] flex items-center justify-center'
                        id='glass'
                    />
                    <div
                        className=' bg-[#556172] w-full p-6 flex flex-col justify-between'
                        id='glass'
                    >
                        <div className=' flex flex-col'>
                            <text className=' font-thin'>66</text>
                            <text>Lorem ipsum dolor sit amet consectetur. Elit nascetur suspendisse fermentum enim. Ornare leo lacus nulla aenean vel. Id auctor leo aliquam nunc integer mauris dignissim viverra aliquam.</text>
                            <text className=' font-thin self-end'>99</text>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className=' flex gap-3 items-center'>
                                <div id='rotatable' className=' h-11 w-11 mb-1'>
                                    <FaArrowRightLong size={21} />
                                </div>
                                <div className=' flex flex-col -space-y-[10px]'>
                                    <text>Pratibha Patil</text>
                                    <text className=' text-[#888888]'>School Teacher ZP</text>
                                </div>
                            </div>
                            <div className=' flex gap-3'>

                                <div id={'container'}
                                    className=' flex justify-center items-center h-11 w-11 rounded-full'>
                                    <FaArrowLeftLong
                                        size={21}
                                        className={'arrow'}
                                    />
                                </div>

                                <div id={'container'}
                                    className=' flex justify-center items-center h-11 w-11 rounded-full'>
                                    <FaArrowRightLong
                                        size={21}
                                        className={'arrow'}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ background: 'url(https://assets-global.website-files.com/641ef7ac927bd55e5b0aa762/65367005549f9c3074846364_Adventure.webp)', backgroundPosition: 'center', backgroundSize: 'cover', width: `${oneCellWidth * 3}px`, height: `${(oneCellHeight * 2) + (3 * oneGap)}px` }}
                        className='bg-[#556172]'
                        id='glass'
                    />

                </div>
                <div className=' flex' style={{ gap: oneGap }}>
                    <div
                        className=' flex flex-col p-6 justify-between'
                        style={{ width: `${(oneCellWidth * 4)}px`, height: `${oneCellHeight * 2}px` }}
                        id='glass'
                    >
                        <div style={{ borderWidth: 1, }} className=' opacity-0 rounded-full h-11 w-11 flex items-center justify-center'>
                            <FaTwitter size={21} />
                        </div>
                        <div className=' flex flex-col'>
                            <text style={{ fontFamily: "Montserrat" }} className=' text-4xl'>Have an Idea in Mind?</text>
                            <text className='text-[#888888]'>Let's Bring It to Life Together!</text>
                        </div>
                        {/* Let's Make It Happen—I'm a good listener too! */}
                        <div className=' flex flex-row gap-5'>
                            <div
                                onMouseMove={() => setIsHoveredonEmail(true)}
                                onMouseLeave={() => setIsHoveredonEmail(false)}
                                className=" bg-[rgb(34,114,239)] px-6 rounded-full h-11 w-52 flex items-center justify-center"
                            >
                                {!isHoveredonEmail && 'email@gmail.com'}
                                {isHoveredonEmail && <RotationText text="email@gmail.com" />}
                            </div>

                            {/* <div ref={containerRef} id='emailroatation' className=' pointer-events-none bg-[#2272EF] px-6 rounded-full h-11 flex items-center justify-center'>email@gmail.com</div> */}

                            <MagneticIcon icon={FaInstagram} size={25} background={'linear-gradient(135deg, #8316FA, #FC17CA, #FDC61C)'} />
                            {/* {'linear-gradient(135deg, #8316FA, #FC17CA, #FDC61C)'} */}
                            <MagneticIcon icon={FaLinkedinIn} size={21} background={'#1576B4'} />
                            <MagneticIcon icon={FaTwitter} size={21} background={'#1CBDF5'} />
                        </div>
                    </div>

                    <div
                        className=' flex flex-col p-6'
                        style={{ width: `${(oneCellWidth * 4)}px`, height: `${oneCellHeight * 2}px` }}
                        id='glass'
                    >
                        <text style={{ fontFamily: "Montserrat" }} className=' text-4xl'>Curious About My Work?</text>
                        <div className=' flex flex-col h-full justify-end' style={{ fontFamily: "Zain" }}>
                            <div style={{ borderBottomColor: '#888888', borderBottomWidth: 1 }} id='upperRotable' className=' py-2 flex justify-between items-center'>
                                <span>Sparshbhash (Embaded system)</span>
                                <div id='rotatable' className=' h-11 w-11'>
                                    <FaArrowRightLong size={21} />
                                </div>
                            </div>
                            <div style={{ borderBottomColor: '#888888', borderBottomWidth: 1 }} id='upperRotable' className=' py-2 flex justify-between items-center'>
                                <span>Child Saftey Detector (Signal Processing)</span>
                                <div id='rotatable' className=' h-11 w-11'>
                                    <FaArrowRightLong size={21} />
                                </div>
                            </div>
                            <div id='upperRotable' className=' pt-2 flex justify-between items-center'>
                                <span>View all</span>
                                <div id='rotatable' className=' h-11 w-11'>
                                    <FaArrowRightLong size={21} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

