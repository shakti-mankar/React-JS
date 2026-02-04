
// function App() {

//   let person = {
//     name: "Aditya",
//     city: "indore",
//   };

//   let emp = [
//     { name: "Shakti", city: "bpl", contact: 32332 },
//     { name: "sumit", city: "indore", contact: 565233 },
//     { name: "Alaika", city: "bpl", contact: 56858 },
//     { name: "Arshan", city: "bpl", contact: 97776 } // Removed '00' at start
//   ];

//   return (
//     <>
//       <h1 className="bg-red-100">This is app page</h1>
//       <h2>{person.name}</h2>
//       <hr />

//       <ul>
//         {emp.map(e => (
//           <li>{e.name}</li>
//         ))}
//       </ul>

//       <table border="">
//         <tr>
//           <th>Name</th>
//           <th>City</th>
//           <th>Contact</th>
//         </tr>

//         {emp.map(e => (
//           <tr>
//             <td>{e.name}</td>
//             <td>{e.city}</td>
//             <td>{e.contact}</td>
//           </tr>
//         ))}
//       </table>

//       <img src="vite.svg" alt="" />
//       <img src={img1} alt="" />
//     </>
//   );
// }

// import img1 from './assets/react.svg'


// function App() {

//   let product = [

//     {

//       pname:"laptop",
//       pprice:"12000",
//       pbrand:"lenovo",
//       pimg:img1,
//     },

//     {

//       pname:"mobile",
//       pprice:"22000",
//       pbrand:"samsung",
//       pimg:img1,


//     },

//     {

//       pname:"laptop",
//       pprice:"19000",
//       pbrand:"dell",
//       pimg:img1,


//     }
//   ]

//   return(

//     <>

//     <h1 > This is Product Page </h1>

//     <hr />

//     <section>

//       {

//         product.map((e)=>(

//           <div style={{border:"2px solid black"}}>

//             <img src={e.img1} alt="" />

//             <h1> Name : {e.pname} </h1>
//             <h1> Brand : {e.pbrand} </h1>
//             <h1> Price : {e.pprice} </h1>
          


//           </div>




//         ))
//       }


   

//     </section>


    
    
//     </>
//   )
// }




// export default App;



import img1 from './assets/img2.jpeg';

function App() {

  let product = [
    {
      pname: "laptop",
      pprice: "12000",
      pbrand: "lenovo",
      pimg: img1,
    },
    {
      pname: "Laptop",
      pprice: "22000",
      pbrand: "samsung",
      pimg: img1,
    },
    {
      pname: "laptop",
      pprice: "19000",
      pbrand: "dell",
      pimg: img1,
    }
  ];

  return (
    <>
      <h1>This is Product Page</h1>

      <br />
      <hr />

      <section style={ { display:"flex" , justifyContent:"space-around"  }}>
        {
          product.map((e) => (
            <div style={{ border: "2px solid black", padding:"40px"  }}>
              <img src={e.pimg} alt="" width="300" />
              <h1>Name : {e.pname}</h1>
              <h1>Brand : {e.pbrand}</h1>
              <h1>Price : {e.pprice}</h1>
              <button style={{backgroundColor:"white" , border:"2px solid black" , padding:"4px" }}> Add to cart </button>
            </div>
          ))
        }
      </section>
    </>
  );
}

export default App;

