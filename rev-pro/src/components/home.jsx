import yono from './assets/yono2.jpeg'


function home() {
    return(
        <>

        <h1> this is home page </h1>
        
        {/* public */}
        <img src="vite.svg" alt="" />

        {/* src folder  */}

        <img src={yono} alt="" />

        
    
        </>
    )
}

export default home