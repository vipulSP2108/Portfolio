import React from 'react'
import '../App.css';
import imageMy from '../assets/My.jpg';

export default function Contact2() {
    return (
        <div
        // className=' flex flex-row'
            // className='z-0  flex flex-col items-center justify-center w-full h-screen text-center'
        >
            <div id='contanor'>
                <button id='toggle-btn'>[Drop/Up]</button>
                <img id='item-0' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-1' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-2' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-3' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-4' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-5' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-6' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-7' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
                <img id='item-8' className=' absolute w-36 h-28 z-50' src={imageMy} alt='' />
            </div>
            <div id="overlay">
                <h1>COldef</h1>
            </div>
            <div id='content'>
                <div class="col">
                    <div class="line"><p>About Us</p></div>
                    <div class="line"><p>Our Team</p></div>
                    <div class="line"><p>Our Mission</p></div>
                    <div class="line"><p>Careers</p></div>
                    <div class="line"><p>Contact</p></div>
                </div><div class="col">
                    <div class="line"> <p>Services</p></div>
                    <div class="line"><p>Web Development</p></div>
                    <div class="line"> <p>Mobile Apps</p></div>
                    <div class="line"><p>UI/UX Design</p></div>
                    <div class="line"><p>SEO Optimization</p></div>
                </div>
                <div class="col">
                    <div class="line"><p>Projects</p></div>
                    <div class="line"><p>E-commerce</p></div>
                    <div class="line"> <p>Portfolio</p></div>
                    <div class="line"><p>Blog</p></div>
                    <div class="line"> <p>Landing Pages</p></div>
                </div>
                <div class="col">
                    <div class="line"><p>Projects</p></div>
                    <div class="line"><p>E-commerce</p></div>
                    <div class="line"> <p>Portfolio</p></div>
                    <div class="line"><p>Blog</p></div>
                    <div class="line"> <p>Landing Pages</p></div>
                </div>
            </div>
        </div>

    )
}
