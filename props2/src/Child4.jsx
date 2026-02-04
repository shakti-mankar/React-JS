import Child5 from "./Child5"


function Child4({college,course}){

    let person = {

        name:"Shakti" ,
        age:98,
        city:"BPL"
    }

    return(

        <>

        <h1> this is child 4 page</h1>

        <h1> {college} {course} </h1>
        
        <Child5 userdata={person} />
        
        </>
    )
}

export default Child4
