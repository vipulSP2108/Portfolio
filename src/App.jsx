import { COLORS } from "./style/colors";
import Home from './Pages/Home'

export default function App() {
  return (
    <div className='w-full text-white' style={{backgroundColor: COLORS.backgroundColor}}>
      <Home />
    </div>
  )
}