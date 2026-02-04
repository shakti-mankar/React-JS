import Home from "./components/home"
import Color from "./components/color"


function App() {

  function demo(a) {
    alert("Working....." +a)
  }

  function demo2() {
    console.log("Hello")
  }

  function demo3() {
    alert("onmouse working")
  }

   function demo4() {
    alert("onmouseenter working")
  }

     function demo5() {
    alert("onmouseleave working")
  }

  return(

    <>

    <h1>This is App page</h1>

    <button onClick={()=>demo("Successfully!!!")}> onClick</button>

    <hr />

    <button onDoubleClick={demo2} > onDoubleClick </button>

    <hr />

    <button onMouseEnter={demo3}> onMouseEnter </button>

    <hr />

    <button onMouseEnter={demo4}> onMouseEnter </button>

    <hr />
    
    <button onMouseLeave={demo5}> onMouseLeave  </button>

    <hr />


    <Home/>


    <Color />

    
    

    
    </>
  )
}

export default App