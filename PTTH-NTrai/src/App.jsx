import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
    <NavBar/>
    {/* <Home/> */}
    {/* <Single/> */}
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
