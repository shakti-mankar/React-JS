import Ch2 from "./Ch2"

function Ch1({Detail}){
    return (

        <>
        <h1>This is Ch1 page</h1>

        <h2> Student = {Detail.name} </h2>

        <Ch2 D = {Detail}/>

       



      

        


        </>
    )
}

export default Ch1