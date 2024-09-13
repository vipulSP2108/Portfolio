import React from 'react';

import css from '../assets/images/css.png';
import css2 from '../assets/images/css2.png';
import tailwindcss from '../assets/images/tailwindcss.svg';
import javascriptweb from '../assets/images/javascriptweb.png';
import threejs from '../assets/images/three.png';
import gsap from '../assets/images/gsap.png';
import javascript from '../assets/images/javascript.png';
import verilog_basys from '../assets/images/verilog_basys.png';
import githubdesktop from '../assets/images/githubdesktop.png';

// Import logos for missing skills
import c from '../assets/images/c.png';
import cpp from '../assets/images/cpp.png';
import python from '../assets/images/python.png';
import html from '../assets/images/html.png';
import react from '../assets/images/react.png';
import arduino from '../assets/images/arduino.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import matlab from '../assets/images/matlab.png';
import autodesk_inventor from '../assets/images/autodesk_inventor.png';
import tinkercad from '../assets/images/tinkercad.png';
import canva from '../assets/images/canva.png';
import blender from '../assets/images/blender.png';


const SkillsData = [

    // Programming Languages
    {
        type: "Programming Language",
        logo: c,
        logoName: "C",
        logoLink: "www.C.com",
        bgColor: "bg-[#3849AB]", // bg-gradient-to-r from-[#00599C] to-[#d3e9f5]
        textColor_first: "text-white",
        textColor_second: "text-zinc-150",
    },
    {
        type: "Programming Language",
        logo: cpp,
        logoName: "C++",
        logoLink: "www.Cpp.com",
        bgColor: "bg-[#01549d]", // bg-gradient-to-r from-[#00599C] to-[#d3e9f5]
        textColor_first: "text-white",
        textColor_second: "text-zinc-150",
    },
    {
        type: "Programming Language",
        logo: python,
        logoName: "Python",
        logoLink: "www.Python.com",
        bgColor: "bg-[#0076bc]", // bg-gradient-to-r from-[#306998] to-[#ffd43b]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "Programming Language",
        logo: javascript,
        logoName: "JavaScript",
        logoLink: "www.JavaScript.com",
        bgColor: "bg-yellow-400", // bg-gradient-to-r from-[#f7df1e] to-[#ffe784]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },

    // FrontEnd
    {
        type: "FrontEnd",
        logo: html,
        logoName: "HTML",
        logoLink: "www.HTML.com",
        bgColor: "bg-orange-500", // bg-gradient-to-r from-[#e34c26] to-[#f06529]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: css2,
        logoName: "CSS",
        logoLink: "www.CSS.com",
        bgColor: "bg-[#1f62ae]", // bg-gradient-to-r from-[#264de4] to-[#2965f1]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: tailwindcss,
        logoName: "Tailwind CSS",
        logoLink: "www.TailwindCSS.com",
        bgColor: "bg-[#20afba]",
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: javascriptweb,
        logoName: "JavaScript",
        logoLink: "www.JavaScript.com",
        bgColor: "bg-[#63a715]",
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: threejs,
        logoName: "Three.js",
        logoLink: "www.Threejs.org",
        bgColor: "bg-purple-500",
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: gsap,
        logoName: "GSAP",
        logoLink: "www.GSAP.com",
        bgColor: "bg-[#82c500]",
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "FrontEnd",
        logo: react,
        logoName: "React",
        logoLink: "www.React.com",
        bgColor: "bg-[#69d8fa]", // bg-gradient-to-r from-[#61dafb] to-[#6dd5fa]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },

    // Embedded System verilog_basy
    {
        type: "Embedded System",
        logo: arduino,
        logoName: "Arduino",
        logoLink: "www.Arduino.com",
        bgColor: "bg-teal-500", // bg-gradient-to-r from-[#00979d] to-[#00c3cb]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "Embedded System",
        logo: verilog_basys,
        logoName: "Verilog_Basys",
        logoLink: "www.verilogbasys.com",
        bgColor: "bg-orange-500", // bg-gradient-to-r from-[#3b82f6] to-[#93c5fd]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },

    // Version Control
    {
        type: "Version Control",
        logo: git,
        logoName: "Git",
        logoLink: "www.Git.com",
        bgColor: "bg-[#f04f32]", // bg-gradient-to-r from-[#f34f29] to-[#f7a8a5]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "Version Control",
        logo: github,
        logoName: "Github",
        logoLink: "www.Github.com",
        bgColor: "bg-gray-900", // bg-gradient-to-r from-[#181717] to-[#333333]
        textColor_first: "text-white",
        textColor_second: "text-zinc-150",
    },
    {
        type: "Version Control",
        logo: githubdesktop,
        logoName: "GitHub Desktop",
        logoLink: "www.desktop.github.com",
        bgColor: "bg-[#9b59b6]", // Light purple color
        textColor_first: "text-white",
        textColor_second: "text-gray-800" // Adjusted for better readability
    },

    // Numerical Computing
    {
        type: "Numerical Computing",
        logo: matlab,
        logoName: "MATLAB",
        logoLink: "www.Matlab.com",
        bgColor: "bg-blue-800", // bg-gradient-to-r from-[#0076a8] to-[#00aaff]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },

    // Tools
    {
        type: "Tool",
        logo: autodesk_inventor,
        logoName: "Autodesk Inventor",
        logoLink: "www.Autodesk.com",
        bgColor: "bg-yellow-700", // bg-gradient-to-r from-[#0696d7] to-[#00c3cb]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },
    {
        type: "Tool",
        logo: tinkercad,
        logoName: "Tinkercad",
        logoLink: "www.Tinkercad.com",
        bgColor: "bg-green-500", // bg-gradient-to-r from-[#ff6f00] to-[#ffab00]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    },

    // Design
    {
        type: "Design",
        logo: canva,
        logoName: "Canva",
        logoLink: "www.Canva.com",
        bgColor: "bg-blue-700", // bg-gradient-to-r from-[#00c4cc] to-[#00e1ff]
        textColor_first: "text-white",
        textColor_second: "text-zinc-150",
    },
    {
        type: "Design",
        logo: blender,
        logoName: "Blender",
        logoLink: "www.Blender.com",
        bgColor: "bg-orange-500", // bg-gradient-to-r from-[#f5792a] to-[#ff9d3f]
        textColor_first: "text-white",
        textColor_second: "text-zinc-950",
    }
];

export default SkillsData;
