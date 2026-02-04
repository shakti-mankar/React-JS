import { useState } from "react"

function About() {

      let [val,setval] = useState(true)


    return(

        <>

        <h1> This is About page</h1>

         { val ? <h1> Get ready </h1> :  <h1> Not ready </h1> }

        <button onClick={()=>{setval(!val)}} > Change </button>
        
        </>
    )
}

export default About