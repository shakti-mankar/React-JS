import { useState } from "react"

function C1() {

    let [val,setval] = useState(0)

    


    
    return(
        <>
        <h1> This is C1 page: Counter</h1>

        <h1 > {val} </h1>
        <button onClick={()=>{setval(val++)}}> + </button>
        <button onClick={()=>{setval(val--)}} > - </button>

        </>
    )
}

export default C1