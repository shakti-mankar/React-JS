import Ch4 from "./Ch4"

function Ch3({D2}){
    return (

        <>
        <h1>This is Ch3 page</h1>

        <h2> Child 3 = {D2.age}  </h2>

        <Ch4 D3 = {D2} />
        </>
    )
}

export default Ch3