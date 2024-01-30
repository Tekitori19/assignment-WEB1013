import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";
import UrlProvider from './providers/UrlProvider';

function App() {

  return (
    <>
      {/* <UrlProvider> */}
        <NavBar/>
            <Outlet/>
        <Footer/>
      {/* </UrlProvider> */}
    </>
  )
}

export default App
