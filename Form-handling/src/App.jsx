import { useState } from "react"
import Form from "./components/form"



function App() {


  // In React, onChange is an event handler used to detect and respond to changes in 
  // form elements like <input>, <textarea>, and <select>.
  // It’s commonly used to update component state whenever the user types or selects something.

  // let [frmdata,setfrmdata] = useState()

  // // let [edata,setemail] = useState()

  // // let [pdata,setpass] = useState()
 
  // function handledata(n){

  //   console.log(n.target.value)
  //   setfrmdata(n.target.value)

  // }

  // function submit(s){
  //   s.preventDefault
  // }

  // function emaildata(e){
  //   console.log(e.target.value)
  //   setemail(e.target.value)

  // }

  // function passdata(p){
  //   console.log(p.target.value)
  //   setpass(p.target.value)
  // }


  return(

    <>

    <h1> this is app  page</h1>

    {/* <h1> {frmdata} </h1>

    <h2> {edata} </h2>

    <h3> {pdata} </h3> */}

    {/* <h1> Form</h1>

    <form>

      <label htmlFor="">Name:</label>
      <input type="text" onChange={handledata} /> <br /><br />

      <label htmlFor="">Email:</label>
      <input type="text" onChange={emaildata} /><br /><br />

      <label htmlFor="">Password</label>
      <input type="text" onChange={passdata} />


    </form> */}

      <Form/>
    
    </>
  )
}


export default App