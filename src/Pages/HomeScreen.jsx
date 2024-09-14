// Home.js
import React from 'react';
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

import { sampleDataNew } from '../Data/sampleDataNew';

function HomeScreen() {
    const navigate = useNavigate();

    const handleClick = (project) => {
        navigate('/ProjectDetails', { state: { project } });
    };
    
    return (
        <div>
            <Navbar/>
            <Contactbar />
            <Home />
            <Movingbar />
            {/* <Between1 /> */}
            <About />
            <Between2 />
            <Projects2 />
            <Projects />
            {/* <Between3/> */}
            <History />

            {/* <Contact /> */}
            {/* <Grid/> */}
            <FooterCostom/>
        </div>
    );
}

export default HomeScreen;
