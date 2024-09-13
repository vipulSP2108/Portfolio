// npm i react-icons
// npm install gsap
// Zain
// Montserrat
// Lilita One

import { COLORS } from "./style/colors";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import GridBg from "./Components/GridBg";
import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import Grid from "./Pages/Grid";
import Movingbar from "./Components/Movingbar";
import Projects from "./Pages/Projects";
import Contactbar from "./Components/Contactbar";
import About from "./Pages/About";
import Contact2 from "./Pages/Contact2";
import Work from "./Pages/Work";
import Expereence from "./Pages/Experence";
import Between1 from "./Components/Between1";
import Between2 from "./Components/Bettween2";
import History from "./Pages/History";
import Projects2 from "./Pages/Projects2";
import ProjectDetails from "./Pages/ProjectDetails";

import RentHouse from './assets/RentHouse.png';
import Project from './assets/Project.png';


import OutsIIT from './assets/OutsIIT.png';
import CitiesDevGame from './assets/Cities.png';
import ChildSafetyMonitoring from './assets/Cities.png';

const sampleDataNew = [
  {
    name: "OutsIIT",
    date: "January 2024",
    ShowCase: Project,
    Overview: {
      role: "Frontend Lead and — Interaction Design, User Flows, Rapid Prototyping",
      team: "Pranav Somase, Piyush Vishwakarma",
      timeline: "4 Months, APK Released in August 2024",
      overview: "The OutsIIT App was designed to revolutionize the way users interact with campus outlets at IIT Gandhinagar (IITGN). This project aimed to streamline the process of ordering various items—from stationery to food—by creating a seamless and intuitive user flow. By focusing on simplifying campus outlet management, the app enhances both user experience and operational efficiency for shopkeepers.",
    },
    Highlights: {
      highlight: "A comprehensive solution for streamlining ordering processes and enhancing user interactions with campus outlets.",
      highlightShow: [
        { image: OutsIIT, imageAltText: "Logo", imageDescription: "0.1 Homepage motion concept." },
        { image: OutsIIT, imageAltText: "Logo", imageDescription: "0.2 Sample UI components." },
      ],
    },
  },
  {
    name: "CitiesDev",
    date: "September 2024",
    ShowCase: Project,
    Overview: {
      role: "Game Development — 3D Modeling, Game Mechanics, Dynamic Content Updating",
      team: "Self-driven project",
      timeline: "Ongoing development with continuous updates",
      overview: "Developed a city simulation game featuring road construction, and the creation of residential, industrial, and commercial structures. This project provided hands-on experience in game development and dynamic content updating based on in-game time progression. Currently, the project is being enhanced with additional features and improvements.",
    },
    Highlights: {
      highlight: "A foundational city simulation game with potential for further development and feature expansion.",
      highlightShow: [
        { image: CitiesDevGame, imageAltText: "Game Screenshot", imageDescription: "City building and management interface." },
        { image: CitiesDevGame, imageAltText: "Game Screenshot", imageDescription: "Construction of various structures in the game." },
      ],
    },
  },
];


export default function App() {

  return (
    <div style={{ fontFamily: "Zain" }} className=' z-0 cursor-none w-full text-2xl text-white bg-[#171C24] ' >
      <GridBg />
      <Cursor />


      


      <ProjectDetails projectData={sampleDataNew[1]} />


      {/* 💙 💝 */}
      <div className="flex justify-between px-12 p-5">
        <text style={{ fontFamily: "Zain" }} className=' z-30 text-2xl'>© Made with 💖 by VIPul</text>
        <text style={{ fontFamily: "Zain" }} className=' z-30 text-2xl'>Thanks for stoping by...</text>
      </div>
    </div>
  )
}


