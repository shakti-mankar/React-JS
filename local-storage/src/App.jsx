import { Route, Routes } from "react-router-dom"
import Sign from "./sign"
import Login from "./login"






function App() {
  return(

    
    <>

    <Routes>

      <Route index element={<Sign/>} />
      <Route path="/login" element={<Login/>} />
    
    </Routes>
    </>
  )
}


export default App