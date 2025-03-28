// npm i react-icons
// npm install gsap
// Zain
// Montserrat
// Lilita One
// npm install framer-motion

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

import Work from "./Pages/Work";

import Between1 from "./Components/Between1";
import Between2 from "./Components/Bettween2";
import History from "./Pages/History";
import Projects2 from "./Pages/Projects2";
import ProjectDetails from "./Pages/ProjectDetails";


import HomeScreen from "./Pages/HomeScreen";

import { sampleDataNew } from "./Data/sampleDataNew";

import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Skills from "./Components/Skills";
import ConnectSection from "./Components/ConnectSection";
import LocomotiveScroll from 'locomotive-scroll';
import FooterCostom from "./Components/FooterCostom";
import { useContext } from "react";
import { GlobalStateContext } from "./Context/GlobalStateProvider";


export default function App() {

  const locomotiveScroll = new LocomotiveScroll();
  const { isTabletOrLaptop, setIsTabletOrLaptop } = useContext(GlobalStateContext);


  return (
    <HashRouter>
      <div style={{ fontFamily: "Zain", userSelect: "none" }} className=' overscroll-none z-0 cursor-none w-full text-2xl text-white bg-[#171C24] ' >

        {isTabletOrLaptop  ? null :
          <div style={{ background: `linear-gradient(0deg, transparent 5%, #171C24 95%)` }} className="z-40 fixed h-36 md:h-20 w-full " />
        }
        {isTabletOrLaptop ? null :
          <div style={{ background: `linear-gradient(0deg, transparent 5%, #171C24 95%)` }} className="z-40 fixed bottom-0 rotate-180 h-36 md:h-20 w-full " />
        }

        <GridBg />
        {isTabletOrLaptop && <Cursor />}


        {/* <ScrollToTop /> */}

        <div className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/ProjectDetails" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
          

        </div>



      </div>

    </HashRouter>
  )
}


