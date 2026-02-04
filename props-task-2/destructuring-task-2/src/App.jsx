import Ch1 from "./components/Ch1"

function App(city) {

  let obj1 = {
    name:"Shakti",
    city:"Bhopal",
    age:20

  }


  return (

    <>

    <h1> This is App page </h1>

    <Ch1 Detail={obj1}/>





    

    

    
    </>
  )
}

export default App