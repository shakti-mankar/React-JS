// import TiltedCard from "../components/TitledCard";
  


// function Book() {

//   const venues = [
//     {
//       img: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179",
//       title: "Picklepark Bhopal",
//       location: "E-1 Arera Colony (~ 5.1 km)",
//       rating: "3.00 (18)",
//       featured: true
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//       title: "BHEL'S OFFICERS CLUB",
//       location: "Berkheda (~ 6.0 km)",
//       rating: "5.00 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },

//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     }
//   ];

//   return (

    
//     <div className="bg-gray-100 min-h-screen">

//       {/* TOP BAR */}
//       <div className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

//         <h1 className="text-xl font-semibold">
//           Sports Venues in Bhopal: Discover and Book Nearby Venues
//         </h1>

//         <div className="flex gap-4">

//           <input
//             type="text"
//             placeholder="Search by venue name"
//             className="border px-4 py-2 rounded-lg w-64"
//           />

//           <select className="border px-4 py-2 rounded-lg">
//             <option>All Sports</option>
//             <option>Badminton</option>
//             <option>Football</option>
//           </select>

//         </div>

//       </div>

//       {/* TABS */}
//       <div className="bg-white px-6">

//         <div className="flex gap-8 border-b">

//           <button className="pb-3 border-b-2 border-green-600 text-green-600 font-medium">
//             Venues (50)
//           </button>

//           <button className="pb-3 text-gray-500">
//             Coaching (0)
//           </button>

//           <button className="pb-3 text-gray-500">
//             Events (0)
//           </button>

//           <button className="pb-3 text-gray-500">
//             Memberships (0)
//           </button>

//         </div>

//       </div>

//       {/* VENUE CARDS */}


//       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

//   {venues.map((v, i) => (

//     <TiltedCard
//       key={i}
//       imageSrc={v.img}
//       altText={v.title}
//       captionText={v.title}
//       containerHeight="340px"
//       containerWidth="100%"
//       imageHeight="200px"
//       imageWidth="100%"
//       rotateAmplitude={10}
//       scaleOnHover={1.05}
//       showTooltip
//       displayOverlayContent
//       className="rounded-xl shadow hover:shadow-lg overflow-hidden"
      
//       overlayContent={
//         <div className="p-4 text-white flex flex-col justify-between h-full">

//           {/* TOP CONTENT */}
//           <div>
//             <div className="flex justify-between items-center">
//               <h3 className="font-semibold">{v.title}</h3>
//               <span className="text-sm">⭐ {v.rating}</span>
//             </div>

//             <p className="text-sm mt-2">
//               {v.location}
//             </p>

//             <div className="flex gap-3 mt-3 text-lg">
//               🏸 🎾
//             </div>
//           </div>

//           {/* BOOK BUTTON */}
//           <button
//             onClick={() => console.log("Book:", v.title)}
//             className="mt-4 w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-lg text-sm font-medium"
//           >
//             Book Now
//           </button>

//         </div>
//       }
//     >

//       {/* BADGES */}
//       <div className="absolute bottom-3 left-3 flex gap-2">
//         {v.featured && (
//           <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
//             Featured
//           </span>
//         )}
//       </div>

//       <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
//         Bookable
//       </span>

//     </TiltedCard>

//   ))}

// </div>

    

// {/* 

// <TiltedCard
//   imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//   altText="Kendrick Lamar - GNX Album Cover"
//   captionText="Kendrick Lamar - GNX"
//   containerHeight="300px"
//   containerWidth="300px"
//   imageHeight="300px"
//   imageWidth="300px"
//   rotateAmplitude={12}
//   scaleOnHover={1.1}
//   showMobileWarning={false}
//   showTooltip
//   displayOverlayContent
//   overlayContent={
//     <p className="tilted-card-demo-text">
//       Kendrick Lamar - GNX
//     </p>
//   } */}

      
//       {/* <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

//         {venues.map((v, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//           >

//             {/* IMAGE */}
//             {/* <div className="relative">

//               <img
//                 src={v.img}
//                 className="h-48 w-full object-cover"
//               /> */}

//               {/* FEATURED */}
//               {/* {v.featured && (
//                 <span className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded">
//                   Featured
//                 </span>
//               )} */}

//               {/* BOOKABLE
//               <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
//                 Bookable
//               </span>

//             </div> */}

//             {/* CONTENT */}
//             {/* <div className="p-4">

//               <div className="flex justify-between items-center">

//                 <h3 className="font-semibold">
//                   {v.title}
//                 </h3>

//                 <span className="text-sm text-yellow-500">
//                   ⭐ {v.rating}
//                 </span>

//               </div>

//               <p className="text-sm text-gray-500 mt-2">
//                 {v.location}
//               </p>

//           //     {/* ICONS */}
//           {/* //     <div className="flex gap-3 mt-3 text-gray-400 text-lg">
//           //       🏸 🎾
//           //     </div>

//           //   </div> */}

//           // </div>
//         ))}

//       </div>

//     </div> */}
//   ); */}
// }

// export default Book;



// import TiltedCard from "../components/TitledCard";

// function Book() {

//   const venues = [
//     {
//       img: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179",
//       title: "Picklepark Bhopal",
//       location: "E-1 Arera Colony (~ 5.1 km)",
//       rating: "3.00 (18)",
//       featured: true
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//       title: "BHEL'S OFFICERS CLUB",
//       location: "Berkheda (~ 6.0 km)",
//       rating: "5.00 (3)"
//     },
//     {
//       img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
//       title: "Olympo Badminton Academy",
//       location: "Gulmohar Colony (~ 7.9 km)",
//       rating: "3.67 (3)"
//     }
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* TOP BAR */}
//       <div className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

//         <h1 className="text-xl font-semibold">
//           Sports Venues in Bhopal: Discover and Book Nearby Venues
//         </h1>

//         <div className="flex gap-4">

//           <input
//             type="text"
//             placeholder="Search by venue name"
//             className="border px-4 py-2 rounded-lg w-64"
//           />

//           <select className="border px-4 py-2 rounded-lg">
//             <option>All Sports</option>
//             <option>Badminton</option>
//             <option>Football</option>
//           </select>

//         </div>
//       </div>

//       {/* TABS */}
//       <div className="bg-white px-6">
//         <div className="flex gap-8 border-b">
//           <button className="pb-3 border-b-2 border-green-600 text-green-600 font-medium">
//             Venues (50)
//           </button>
//           <button className="pb-3 text-gray-500">Coaching (0)</button>
//           <button className="pb-3 text-gray-500">Events (0)</button>
//           <button className="pb-3 text-gray-500">Memberships (0)</button>
//         </div>
//       </div>

//       {/* VENUE CARDS */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

//         {venues.map((v, i) => (
//           <TiltedCard
//             key={i}
//             imageSrc={v.img}
//             altText={v.title}
//             captionText={v.title}
//             containerHeight="340px"
//             containerWidth="100%"
//             imageHeight="200px"
//             imageWidth="100%"
//             rotateAmplitude={10}
//             scaleOnHover={1.05}
//             showTooltip
//             displayOverlayContent
//             className="rounded-xl shadow hover:shadow-lg overflow-hidden"

//             overlayContent={
//               <div className="p-4 text-white flex flex-col justify-between h-full">

//                 {/* INFO */}
//                 <div>
//                   <div className="flex justify-between items-center">
//                     <h3 className="font-semibold">{v.title}</h3>
//                     <span className="text-sm">⭐ {v.rating}</span>
//                   </div>

//                   <p className="text-sm mt-2">
//                     {v.location}
//                   </p>

//                   <div className="flex gap-3 mt-3 text-lg">
//                     🏸 🎾
//                   </div>
//                 </div>

//                 {/* BOOK BUTTON */}
//                 <button
//                   onClick={() => console.log("Book:", v.title)}
//                   className="mt-4 w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-lg text-sm font-medium"
//                 >
//                   Book Now
//                 </button>

//               </div>
//             }
//           >

//             {/* BADGES */}
//             <div className="absolute bottom-3 left-3">
//               {v.featured && (
//                 <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
//                   Featured
//                 </span>
//               )}
//             </div>

//             <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
//               Bookable
//             </span>

//           </TiltedCard>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Book;








// 




import TiltedCard from "../components/TitledCard";
import { useNavigate } from "react-router-dom";

function Book() {

  const navigate = useNavigate();

const venues = [
  {
    img: "picklepark.webp",
    title: "Picklepark Bhopal",
    location: "E-1 Arera Colony (~ 5.1 km)",
    rating: "3.00 (18)",
    featured: true
  },
  {
    img: "bhelOfficers.webp",
    title: "BHEL'S OFFICERS CLUB",
    location: "Berkheda (~ 6.0 km)",
    rating: "5.00 (3)"
  },
  {
    img: "olympo.webp",
    title: "Olympo Badminton Academy",
    location: "Gulmohar Colony (~ 7.9 km)",
    rating: "3.67 (3)"
  },

  // ✅ NEW VENUES ADDED

  {
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    title: "Lets Padel Bhopal",
    location: "National Law Institute University (~ 8.4 km)",
    rating: "5.00 (1)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    title: "The Umbrella Academy",
    location: "Vidhya Nagar Phase-2 (~ 9.6 km)",
    rating: "5.00 (12)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "Fly Sports Club",
    location: "Bagmugaliya (~ 10.1 km)",
    rating: "5.00 (4)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179",
    title: "Sunrise Badminton Club",
    location: "Nand Gaon (~ 10.4 km)",
    rating: "5.00 (2)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
    title: "Smash Club : Badminton and Pickleball Arena",
    location: "Bagmugaliya (~ 10.6 km)",
    rating: "5.00 (4)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1594737625785-cb3a0c9c4d22",
    title: "Greenspace Turf and Sports Club",
    location: "Katara Hills (~ 14.2 km)",
    rating: "5.00 (3)",
    bookable: true
  },
  {
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    title: "Best Shots Bhopal",
    location: "Kohefiza (~ 4.0 km)",
    rating: "0.00 (0)",
    bookable: false
  },
  {
    img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
    title: "RunChase",
    location: "Lalghati (~ 4.3 km)",
    rating: "0.00 (0)",
    bookable: false
  },
  {
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    title: "Kick-Off Futsal",
    location: "Aradhana (~ 4.4 km)",
    rating: "0.00 (0)",
    bookable: false
  }
];
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* TOP BAR */}
      <div className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

        <h1 className="text-xl font-semibold">
          Sports Venues in Bhopal: Discover and Book Nearby Venues
        </h1>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by venue name"
            className="border px-4 py-2 rounded-lg w-64"
          />

          <select className="border px-4 py-2 rounded-lg">
            <option>All Sports</option>
            <option>Badminton</option>
            <option>Football</option>
          </select>
        </div>
      </div>

      {/* TABS */}
      <div className="bg-white px-6">
        <div className="flex gap-8 border-b">
          <button className="pb-3 border-b-2 border-green-600 text-green-600 font-medium">
            Venues (50)
          </button>
          <button className="pb-3 text-gray-500">Coaching</button>
          <button className="pb-3 text-gray-500">Events</button>
          <button className="pb-3 text-gray-500">Memberships</button>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {venues.map((v, i) => (
          <TiltedCard
            key={i}
            imageSrc={v.img}
            altText={v.title}
            captionText={v.title}
            containerHeight="340px"
            containerWidth="100%"
            imageHeight="200px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showTooltip
            displayOverlayContent
            className="rounded-xl shadow hover:shadow-lg overflow-hidden"

            overlayContent={
              <div className="p-4 text-white flex flex-col justify-between h-full">

                {/* INFO */}
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{v.title}</h3>
                    <span className="text-sm">⭐ {v.rating}</span>
                  </div>

                  <p className="text-sm mt-2">{v.location}</p>

                  <div className="flex gap-3 mt-3 text-lg">
                    🏏 ⚽
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate(`/BookingForm/${i}`)}
                  className="mt-4 w-32 mx-auto bg-green-600 hover:bg-green-700 transition py-1.5 rounded-md text-sm font-medium"
                >
                  Book Now
                </button>

              </div>
            }
          >

            {/* BADGES */}
            <div className="absolute bottom-3 left-3">
              {v.featured && (
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                  Featured
                </span>
              )}
            </div>

            <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
              Bookable
            </span>

          </TiltedCard>
        ))}

      </div>

    </div>
  );
}

export default Book;