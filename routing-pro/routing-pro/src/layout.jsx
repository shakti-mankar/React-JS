import { Link, Outlet } from "react-router-dom"


function Layout() {
    return(
        <>

        <nav>
            <h1> LOGO </h1>

            <ul>
                <li> <Link to="/"> Home  </Link> </li>
                <li> <Link to="/About"> About  </Link> </li>
                <li> <Link to="/Contact"> Contact  </Link> </li>
                <li> <Link to="/Services"> Services  </Link> </li>
            </ul>


        </nav>


        <main>
            <Outlet/>
        </main>


        <footer>
            <h1> This is footer section</h1>
        </footer>
        
        </>
    )
}

export default Layout