import { useState } from "react"

function Form() {

    let [frmdata,setfrmdata] = useState({
        username:"", age:"" , city:"",
    })

    function inputdata(event){
        let { name,value } = event.target
        setfrmdata({...frmdata,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault()
        console.log(frmdata)
    }

  


    return(

        <>

        <h1> Form Component </h1>
        
        <form action="" onSubmit={handlesubmit}>

        <label htmlFor="">NAME:</label>
        <input type="text" name="username" onChange={inputdata} /> <br /> <br />

        <label htmlFor="">Age:</label>
        <input type="text"  name="age" onChange={inputdata} /> <br /> <br />

        <label htmlFor="">City:</label>
        <input type="text" name="city" onChange={inputdata} /> <br /> <br />

        <input type="submit" />

        </form>

        
        
        </>


    )

}

export default Form