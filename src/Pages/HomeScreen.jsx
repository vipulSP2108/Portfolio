// Home.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { COLORS } from "./style/colors";
import Contact from "./Contact";
import Home from "./Home";
import GridBg from "../Components/GridBg";
import Cursor from "../Components/Cursor";
import Navbar from "../Components/Navbar";
import Grid from "./Grid";
import Movingbar from "../Components/Movingbar";
import Projects from "./Projects";
import Contactbar from "../Components/Contactbar";
import About from "./About";
import Work from "./Work";

import Between1 from "../Components/Between1";
import Between2 from "../Components/Bettween2";
import FooterCostom from "../Components/FooterCostom";

import History from "./History";
import Projects2 from "./Projects2";
import ProjectDetails from "./ProjectDetails";

import RentHouse from '../assets/RentHouse.png';
import Project from '../assets/Project.png';


import OutsIIT from '../assets/OutsIIT.png';
import CitiesDevGame from '../assets/Cities.png';
import ChildSafetyMonitoring from '../assets/Cities.png';
import ConnectSection from "../Components/ConnectSection";

import { sampleDataNew } from '../Data/sampleDataNew';
import NavbarBottom from '../Components/NavbarBottom';
import NavbarTop from '../Components/NavbarTop';

import './HomeScreen.css';
import { GlobalStateContext } from '../Context/GlobalStateProvider';
import AboutPhone from './AboutPhone';
import Projects2Phone from './Projects2Phone';
import { Experience } from '../Data/Experience';

function HomeScreen() {
    const navigate = useNavigate();

    const handleClick = (project) => {
        navigate('/ProjectDetails', { state: { project } });
    };

    const aboutRef = useRef(null);

    const { isTabletOrLaptop, setIsTabletOrLaptop } = useContext(GlobalStateContext);
    // const [isTabletOrLaptop, setIsTabletOrLaptop] = useState(true);

    const checkScreenSize = () => {
        if (window.innerWidth >= 600) {
            setIsTabletOrLaptop(true); // Show Contactbar
        } else {
            setIsTabletOrLaptop(false); // Hide Contactbar
        }
    };

    // Set the initial screen size on component mount
    useEffect(() => {
        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize); // Update on window resize

        return () => {
            window.removeEventListener("resize", checkScreenSize); // Clean up the event listener
        };
    }, []);

    return (
        <div style={{ userSelect: "none" }}>
            {/* <Navbar /> */}
            <NavbarBottom />
            <NavbarTop />
            {isTabletOrLaptop && <Contactbar />}
            {/* <Contactbar id="show-on-tablet-laptop" /> */}
            <Home />
            {/* <Movingbar /> */}
            {/* <Between1 /> */}
            {/* {isTabletOrLaptop && } */}
            {isTabletOrLaptop ? <About ref={aboutRef} /> : <AboutPhone ref={aboutRef} />}
            {isTabletOrLaptop && <Between2 />}
            {isTabletOrLaptop ? <Projects2 /> : <Projects2Phone noNavigation={true} textcont={'Explore Work'} sampleData={sampleDataNew} />}
            {isTabletOrLaptop && <Projects />}
            {/* <Between3/> */}
            {isTabletOrLaptop ? <History /> : <Projects2Phone noNavigation={true} textcont={'History as Devloper'} sampleData={Experience} />}

            {/* <Contact /> */}
            {/* <Grid/> */}
            {/* <FooterCostom /> */}
        </div>
    );
}

export default HomeScreen;
