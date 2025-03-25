import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function WordAnimation({ gapProvided = 3, projectList, styleGiven }) {
    const menuRef = useRef(null);
    const menuItemsRef = useRef([]);
    const priviewRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const menuItems = menuItemsRef.current;

        // Append duplicate p elements only if they do not exist already
        menuItems.forEach((item) => {
            const copyElements = item.querySelectorAll("#info, #names, #tag");
            copyElements.forEach((div) => {
                const copy = div.querySelector("p");
                if (copy && div.querySelectorAll("p").length === 1) {
                    const duplicatecopy = document.createElement('p');
                    duplicatecopy.textContent = copy.textContent;
                    duplicatecopy.style.color = 'white';
                    duplicatecopy.style.fontFamily = 'Montserrat';
                    duplicatecopy.style.position = 'absolute';  // Ensure the duplicate is on top
                    duplicatecopy.style.top = '100%';  // Start off-screen
                    duplicatecopy.className = styleGiven;  // Apply passed styles
                    div.appendChild(duplicatecopy);
                }
            });
        });
    }, [styleGiven]);

    // Memoized handlers for hover effect
    const handleMouseOver = useCallback((index) => {
        const item = menuItemsRef.current[index];
        gsap.to(item.querySelectorAll("p:nth-child(1)"), {
            top: "-100%",
            duration: 0.4,
        });
        gsap.to(item.querySelectorAll("p:nth-child(2)"), {
            top: "0%",
            duration: 0.4,
        });
    }, [projectList]);

    const handleMouseOut = useCallback((index) => {
        const item = menuItemsRef.current[index];
        gsap.to(item.querySelectorAll("p:nth-child(1)"), {
            top: "0%",
            duration: 0.4,
        });
        gsap.to(item.querySelectorAll("p:nth-child(2)"), {
            top: "100%",
            duration: 0.4,
        });
    }, []);

    useEffect(() => {
        const menuItems = menuItemsRef.current;

        // Add event listeners (consider using event delegation if needed)
        menuItems.forEach((item, index) => {
            item.addEventListener("mouseover", () => handleMouseOver(index));
            item.addEventListener("mouseout", () => handleMouseOut(index));
        });

        return () => {
            menuItems.forEach((item, index) => {
                item.removeEventListener("mouseover", () => handleMouseOver(index));
                item.removeEventListener("mouseout", () => handleMouseOut(index));
            });
        };
    }, [handleMouseOver, handleMouseOut]);

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

    useEffect(() => {
        gsap.to("#names p", {
            backgroundPositionX: "0%",
            stagger: 1,
            duration: 3,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#names",
                scrub: true,
                start: "top 100%",
                end: "bottom 10%",
            }
        });
    }, []);

    return (
        <div>
            <div ref={menuRef}>
                {projectList.map((project, index) => (
                    <div
                        ref={el => menuItemsRef.current[index] = el}
                        // id='menuitem'
                        key={index}
                        style={{
                            display: 'flex',
                            // backgroundColor: 'blue',
                            paddingTop: gapProvided,
                            paddingBottom: gapProvided,
                            // overflow: 'hidden',
                            borderColor: '#888888',
                            cursor: 'pointer',
                            position: 'relative',  // Ensure relative positioning for correct stacking
                        }}
                        onClick={() => handleClick(project)}
                    >
                        <span id='names' style={{height: '20px'}}>
                            <p
                                style={{
                                    fontFamily: 'Montserrat',
                                    margin: 0,
                                    padding: 0,
                                    color: '#888888',
                                }}
                                className={`uppercase text-xl ${styleGiven}`}
                            >
                                {project}
                            </p>
                        </span>
                        {/* <span id='tag'><p>{project}</p></span> */}

                    </div>
                ))}
            </div>
        </div>
    );
}
