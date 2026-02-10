import { useContext } from "react"
import { mainobject } from "../main"


// if we want to use multiple data then we will use => usecontext() rather then   useconsumer 

function Child2() {

    // let store = useContext(mainobject)

    let {name,age,city} = useContext(mainobject)


    return(

        <>


        <h1> THis is Child2 page {name} </h1>
        <h1> {age} </h1>
        <h1> {city} </h1>
{/* 
        <mainobject.Consumer>

            {
                (store)=>{
                    return <h1> {store} </h1>
                }
            }
            
        </mainobject.Consumer> */}

        </>
    )
}

export default Child2