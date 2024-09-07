import { COLORS } from "./style/colors";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import GridBg from "./Components/GridBg";

export default function App() {
  return (
    <div className='w-full text-white bg-[#171C24] px-16' >
      <GridBg/>
      <Home />
      <Contact />
    </div>
  )
}