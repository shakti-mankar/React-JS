
import "./navbar.css";


function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo-section">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <span className="brand-name">MyApp</span>
      </div>




      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
       
      </ul>
    </nav>
    </>
  )

  
}



export default Navbar;
























// import './App.css'

// import Fun from './components/home'

// function App(){

//   let name = "Shakti"

//   let color = {
//     backgroundColor:"blue",
//     color:"red"
//   }




//   return(

//     <>

//     {/* <h1> this is rev page</h1>
//     <hr />

//     <br />

//     <h2 className=""> jfbvuiwif</h2>

//     <h3>{name}</h3> */}

//     <h1 style={{backgroundColor:"orange"}}> this react class 1 </h1>
//      <h1 style={{backgroundColor:"blue"}}> this react class 2 </h1>
//       <h1 style={{backgroundColor:"green"}}> this react class 3 </h1>

//     <h2 style={color}> {name} and this is internal css </h2>

//     <h3 className='head'> this is external css </h3>


//     <Fun/>

    

    
//     </>
 
//   )
// }

// export default App