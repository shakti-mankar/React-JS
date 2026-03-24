import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){

    let [loginval,setloginval] = useState({
        email:"",password:""
    })

    function logininput(e){
        let {name,value} = e.target
        setloginval({...loginval,[name]:value})
    }

    function handlelogin(e){
        e.preventDefault()
        let localdata = JSON.parse(localStorage.getItem("userdata"))

        if(loginval.email != localdata.email || loginval.password != localdata.password){
            alert(" USER NOT FOUND")
        }

        else{
            alert("Login Successfully")

        }
    }


    return(
        <>

        <h1> Login  </h1>
        
        <form onSubmit={handlelogin} >

            <label htmlFor=""  > Email: </label>
            <input type="text" name="email" onChange={logininput} /> <br /> <br /> 

            
            <label htmlFor=""> Password: </label>
            <input type="text" name="password" onChange={logininput} /> <br /> <br /> 

            <Link to="/Booking">

            <input type="submit" />
            </Link>

        
        </form>
        
        </>
    )
}

export default Login