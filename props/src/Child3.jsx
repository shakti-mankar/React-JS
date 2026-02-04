import Child4 from "./Child4";

function Child3(props){

    const {city,location} = props // destructuring 

    return (

        <>
        <h1>This is child3 page </h1>

        <h1> {city} {location} </h1>

        <Child4 college="RGC" course="BCA"/>
        </>
    )
}

export default Child3