// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Signup() {

//      function Sign(){
//         let [signfrm,setfrm] = useState({
//             username:"" , email:""  , password:""
//         })

//         let navigator = useNavigate()
//         const { name ,  value  } = e.target
//         setfrm({...signfrm,[name]:value})
//      }


//     function handlesubmit(e){
//         e.preventDefault()
//         localStorage.getItem("userdata",JSON.stringify(signfrm))
//         navigator("./Login")
//      }





//   return (
   
   



//     <div className="flex items-center justify-center min-h-screen bg-gray-100">

//       <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Create Account
//         </h2>

//         <form onSubmit={handlesubmit} ></form>

//         <input
//           type="text"
//           placeholder="UserName"
//           className="w-full border p-3 rounded-lg mb-3"
//           name="username"
//           onChange={inputdata}

//         />

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-3 rounded-lg mb-3"
//           name="email"
//           onChange={inputdata}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-3 rounded-lg mb-4"
//           name="password"
//           onChange={inputdata}
//         />

//         <button className="w-full bg-green-600 text-white py-3 rounded-lg">
//           Sign Up
//         </button>
        
        



//         </form>
//       </div>

//     </div>
//   );
// }

// export default Signup;


import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {

  const [signfrm, setfrm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  function inputdata(e) {
    const { name, value } = e.target
    setfrm({ ...signfrm, [name]: value })
  }

  function handlesubmit(e) {
    e.preventDefault()

    localStorage.setItem("userdata", JSON.stringify(signfrm))

    navigate("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handlesubmit}>

          <input
            type="text"
            placeholder="UserName"
            className="w-full border p-3 rounded-lg mb-3"
            name="username"
            onChange={inputdata}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-3"
            name="email"
            onChange={inputdata}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
            name="password"
            onChange={inputdata}
          />

          <input type="submit"  className="w-full bg-green-600 text-white py-3 rounded-lg"
          
          
          />

        </form>

      </div>

    </div>
  )
}

export default Signup