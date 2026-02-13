// import axios from "axios"
// import { useEffect, useState } from "react"


// function App(){

 
 
//  let [apidata,setapidata] = useState([])




//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/comments')
//     .then((res)=>setapidata(res.data))

//   },[])


//   return(
//     <>
    
//     <h1>Table</h1>

//     <table border="">
//       <tr>
//         <th>ID</th>
//         <th>NAME</th>
//         <th>EMAIL</th>
//         <th>BODY</th>

//       </tr>

//       {
//         apidata.map((e)=>(

//           <tr>
//             <td> {e.id} </td>
//             <td> {e.name} </td>
//             <td> {e.email} </td>
//             <td> {e.body} </td>

//           </tr>
          
//         ))
//       }


//     </table>




    
//     </>
//   )
// }

// export default App

import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  let [apidata,setapidata] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>setapidata(res.data))
  },[])





  return(

    <>

    <h1> This is App page </h1>

    <table border="" >
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>BODY</th>
        
      </tr>

      {
        apidata.map((e)=>(

        <tr>
        <td> {e.id} </td>
        <td> {e.name} </td>
        <td> {e.email} </td>
        <td> {e.body} </td>


      </tr>

          



        ))
      }



    </table>




    
    </>


  )
}

export default App