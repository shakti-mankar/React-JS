import { toast } from "react-toastify"



function app(){

  function demo(){
    toast("@#$%^&*(", {
    position:"top-center",
    type:"success",
    autoClose:2000
    })

    
  }


  return(


    <>

    <button onClick={demo} > click here </button>
    

    </>
  )
}

export default app