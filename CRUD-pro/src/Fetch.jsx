import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {

    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("DATA DELETED!!!!!"))

    }

    

            let [apidata,setapidata] = useState([])

            useEffect(()=>{
                axios.get('http://localhost:3000/userdata')
                .then((r)=>setapidata(r.data))
            },[mydelete])


             


    return(


        <>

        <h1> This is fetch page </h1>

        <table border="">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
                <th>delete</th>
            </tr>


        {
            apidata.map((e)=>(

                <tr> 
                    <td> {e.id} </td>
                    <td> {e.name} </td>
                    <td> {e.age} </td>
                    <td> {e.contact} </td>
                    <td> {e.city} </td>
                    <td> <button onClick={()=>mydelete(e.id)} > Delete </button> </td>

                 </tr>


            ))
        }


        </table>
        
        
        </>
    )
}

export default Fetch