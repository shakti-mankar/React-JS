import { Component, createContext, useContext } from "react"
import Child1 from "./components/Child1"


  // let dataobject =  createContext()
  // // let name = "REACT JS"

  // let person={
  //   name:"Shakti"
  // }



function App() {


  // THERE ARE THREE MAIN Component
  // 1. create
  // 2. provider
  // 3. consumer

  return(

    
<>
    <h1>This is app page</h1>
    
    {/* <dataobject.Provider  value={person.name}  >

      


    </ dataobject.Provider > */}

    <Child1/>

</>

  )
}

export default App
// export {dataobject}

