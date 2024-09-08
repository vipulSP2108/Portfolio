// npm i react-icons

import { COLORS } from "./style/colors";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import GridBg from "./Components/GridBg";
import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div style={{ fontFamily: "Zain" }} className='w-full text-2xl text-white bg-[#171C24] ' >
      {/* <GridBg/> */}
      {/* <Cursor/> */}
      <Navbar />
      <Home />
      <Contact />
      <div className=" flex justify-between px-12 p-5">
      {/* 💙 💝 */}
        <text style={{ fontFamily: "Zain" }} className=' text-2xl'>© Made with 💖 by VIPul</text>
        <text style={{ fontFamily: "Zain" }} className=' text-2xl'>Thanks for stoping by.</text>
      </div>
    </div>
  )
}