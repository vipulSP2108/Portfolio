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
export default function App() {

  return (
    <HashRouter>
      <div style={{ fontFamily: "Zain" }} className=' overscroll-none z-0 cursor-none w-full text-2xl text-white bg-[#171C24] ' >
        <GridBg />
        <Cursor />
        <ScrollToTop />

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


