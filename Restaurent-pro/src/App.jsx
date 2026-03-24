import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Sign from "./Sign"
import Booking from "./Booking"





function App() {
  return(

    
    <>

    <Routes>

      <Route index element={<Sign/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Booking" element={<Booking/>} />
    
    </Routes>
    </>
  )
}


export default App