import { useState } from "react";
import { CgPassword } from "react-icons/cg";

function Login() {

    let [loginvalue,setloginval] =  useState({
        username:"" , password:"" 
    })

    function logininput(){
        let {name,value} = e.target
        setloginval({...loginval,[name]:value})

    }

    function handlesubmit(e){
        e.preventDefault()
        let localdata = JSON.parse(localStorage.getItem("userdata"))

        if (loginval.username != localdata.email || logininput.password != localdata.password ){
            alert(" SIGN UP FIRST  ")
        }

        else{
            alert("Login Successfully")
        }
    }









  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handlelogin}>



        <input
          type="text"
          placeholder="User Name"
          className="w-full border p-3 rounded-lg mb-4"
          name="username"
          onChange={logininput}
          
          
          
          
          />

         <input
          type="text"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          name="password"
          onChange={logininput}
        />


        <input type="submit"  className="w-full bg-green-600 text-white py-3 rounded-lg"
        
        
        />

        </form>
      </div>

    </div>
  );
}

export default Login;