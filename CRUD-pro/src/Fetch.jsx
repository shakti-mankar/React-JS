import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {

     let [apidata,setapidata] = useState([])

     let [show,setshow] = useState(false)

     let [edit,setedit] = useState() 





    function editinput(e){
        const {name,value} = e.target
        setedit({...edit,[name]:value})
    }

    function finalsubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${edit.id}`,edit)
        .then((e)=>alert("DATA UPDATED!!!"))
    }






    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("DATA DELETED!!!!!"))

    }

    

           

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
                <th>Edit</th>
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
                    <td> <button onClick={()=>(setshow(true),setedit(e))} > Edit </button> </td>


                 </tr>


            ))
        }


        </table>

        {
            show && <form action="" onSubmit={finalsubmit}>

                <label htmlFor="">ID</label>
                <input type="text" name="id"  onChange={editinput} />

                <label htmlFor="">Name</label>
                <input type="text" value={edit.name} name="name"  onChange={editinput} /> <br /> 

                <label htmlFor=""> Age</label>
                <input type="text" value={edit.age} name="age"  onChange={editinput} /> <br />

                <label htmlFor="">Contact</label>
                <input type="text" value={edit.contact} name="contact"  onChange={editinput} /> <br />

                <label htmlFor="">City </label>
                <input type="text" value={edit.city} name="city"  onChange={editinput}  /> <br />

                <input type="submit" />





            </form>
        }
        
        
        </>
    )
}

export default Fetch