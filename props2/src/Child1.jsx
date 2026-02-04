import Child2 from "./Child2"
import Child3 from "./Child3"

function Child1(props){

    return(

        <>

        <h1> This is Child 1 Page</h1>

        <h1> {props.name} </h1> 

        <hr />

        <Child2 age={35} />

        <hr />

        <Child3 />
        

        </>
    )

}

export default Child1