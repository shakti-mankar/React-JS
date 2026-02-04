import './style.css'

function Nav(navbar) {
    return (

        <>

        <nav className="navbar">

            <div> <h1> MyApp</h1></div>

            <ul className="navlinks">
                <li ><a href="#About">Home </a></li>
                <li ><a href="#contact">Contact </a></li>
                <li ><a href="#about"> About </a></li>
                <li ><a href="#services"> Services </a></li>
                <li ><a href="#gallery">GAllery </a></li>
            </ul>


        </nav>
        
        </>
    ) 
}

export default Nav