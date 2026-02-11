import { useContext } from "react"
import Child1 from "./components/Child1"
import { mainobject } from "./main"


function App() {

  let {name,age,city} = useContext(mainobject)



  return(


    <>

    <h1>This is App/Parent page {name} {city} {age} </h1>

    <Child1/>

  


    
    </>
  )
}

export default App