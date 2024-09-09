// npm i react-icons
// npm install gsap
// Zain
// Montserrat

import { COLORS } from "./style/colors";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import GridBg from "./Components/GridBg";
import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import Grid from "./Pages/Grid";
import Movingbar from "./Components/Movingbar";
import Projects from "./Pages/Projects";


export default function App() {
  return (
    <div style={{ fontFamily: "Zain" }} className='w-full text-2xl text-white bg-[#171C24] ' >
      {/* <GridBg/> */}
      {/* <Cursor/> */}
      <Navbar />
      <Home />
      <Movingbar/>
      {/* <Projects/> */}
      <Contact />

      {/* <Grid/> */}

      {/* 💙 💝 */}
      <div className=" flex justify-between px-12 p-5">
        <text style={{ fontFamily: "Zain" }} className=' text-2xl'>© Made with 💖 by VIPul</text>
        <text style={{ fontFamily: "Zain" }} className=' text-2xl'>Thanks for stoping by.</text>
      </div>
    </div>
  )
}