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


export default function App() {

  return (
    <div style={{ fontFamily: "Zain" }} className='w-full text-2xl text-white bg-[#171C24] ' >
      <GridBg/>
      {/* <Cursor/> */}
      <Navbar />
      <Contactbar />

      <Home />

      <Movingbar />
      <Between1 />
      

      <About />

      <Between2 />

      <Projects2 />

      <Projects />
      
      {/* <Between3/> */}

      <History />

      {/* <Expereence/> */}
      {/* <Movingbar/> */}


      {/* <Contact /> */}
      {/* <Contact2 /> */}


      {/* <Grid/> */}
      {/* 💙 💝 */}
      <div className="flex justify-between px-12 p-5">
        <text style={{ fontFamily: "Zain" }} className=' z-30 text-2xl'>© Made with 💖 by VIPul</text>
        <text style={{ fontFamily: "Zain" }} className=' z-30 text-2xl'>Thanks for stoping by...</text>
      </div>
    </div>
  )
}