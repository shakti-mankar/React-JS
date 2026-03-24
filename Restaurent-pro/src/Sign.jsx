import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sign(){
    let [signfrm,setfrm] = useState({
        name:"", email:"" , age:"" , password:""
    })

        let navigator = useNavigate()

    function inputdata(e) {
        const { name , value} = e.target
        setfrm({...signfrm,[name]:value})
        
    }

    function handlesubmit(e) {
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify(signfrm))
        navigator('./login')
    }
    return(



        <>
        <h1> Sign Up</h1>

        <form onSubmit={handlesubmit}  >

            <label htmlFor=""> NAME: </label>
            <input type="text" name="name" onChange={inputdata} /> <br /> <br /> 

            
            <label htmlFor=""> Email: </label>
            <input type="text" name="email" onChange={inputdata} /> <br /> <br /> 
            
            <label htmlFor=""> AGE: </label>
            <input type="text" name="age" onChange={inputdata} /> <br /><br />

            <label htmlFor="">PASSWORD:</label>
            <input type="text" name="password" onChange={inputdata} />

            <input type="submit" />
   



        </form>
        </>
    )
}

export default Sign