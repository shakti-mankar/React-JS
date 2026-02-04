import Child2 from "./Child2"

function Child1(props){

    return(

        <>

        <h1> This is Child 1 Page</h1>

        <h1> {props.name} </h1> 

        <hr />

        <Child12 age={35} />

        </>
    )

}

export default Child1