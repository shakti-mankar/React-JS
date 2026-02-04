import { use, useState } from "react"


function Home()  {

    // let [variable,function] = useState(10)
    // - State = data that changes inside a component.\
    // - Hook = a tool (function) that React gives you to use features like state, effects, etc.
    // it will use at the top of the function 

    let [num,setNum] = useState(10)

    

    function demo() {
        setNum(5)
    }

    // Counter type one 


    let [value,changeNum] = useState(0)

    function minus() {
        changeNum(value-1)


    }

     function Plus() {
        changeNum(value+1)


    }

    // conuter type two 

    let [number,incre] = useState(0)


 



    return (

        <>
        <h1> this is home page</h1>

        <h1 > number = {num} </h1>

        <button onClick={demo}> Change</button>

        <hr />

        <button onClick={()=>setNum("progress....!!")}> for change </button>

        {/* Counter type one  */}
        <h1> {value} </h1>
        <button onClick={minus}> - </button>
        <button onClick={Plus}> + </button>

        {/* Counter tyoe two */}

        <h1> {number} </h1>

        <button onClick={()=>incre(number+1)}> + </button>
        <button onClick={()=>incre(number-1)}> - </button>

        <hr />

        <hr />






        </>
    )
}

export default Home