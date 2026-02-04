import Services from "./Services"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import { Routes,Route } from "react-router-dom"
import Layout from "./layout"


function App() {
  return(

    <>
    
    <Routes>

      <Route path="/" element= {<Layout/>}>

      <Route path="/home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
      </Route>



    


    </Routes>

   
    </>


  ) 
}

export default App