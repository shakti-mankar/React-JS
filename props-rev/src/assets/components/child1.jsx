function Child1(props) {
    return(
        <>

        <h1> This is child1 page </h1>

        <h1> {props.name} <br /> {props.age}  <br />{props.city} <br />{props.state} <br /> {props.contact}</h1>

        <hr />

        


        
        </>
    )
} 

export default Child1