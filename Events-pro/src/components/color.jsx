import { useState } from "react"


function Color() {

    // Color change using state

    let [Color,setColor] = useState()

    let [img,setImg] = useState("s1.webp")

    


    return(

        <>

        <div style={{backgroundColor:Color}}>
        
        <h1> Color component </h1>

        <button onClick={()=>setColor('red')} > Red </button>
        <button onClick={()=>setColor('yellow')}> Yellow </button>
        <button onClick={()=>setColor('blue')}> Blue </button>
        <button onClick={()=>setColor('green')}> Green </button>


        </div>

        <hr />
        <hr />


        {/* Image change using state  */}
        
        <div>

            <img src={img} alt="" onClick={()=>setImg(img)}  style={{ height: "300px", display: "block", marginBottom: "20px" }} />
            <br />

            <img 
            style={{height:"200px"}} 
            src="s1.webp" alt="" 
            onClick={()=>setImg("s1.webp")} 
            /> 


            <img style={{height:"200px"}} src="s2.jpg" alt="" onClick={()=>setImg("s2.jpg")} />
            <img style={{height:"200px"}} src="s3.avif" alt="" onClick={()=>setImg("s3.avif")}  />
            


        </div>


        
        </>
    ) 
}

export default Color