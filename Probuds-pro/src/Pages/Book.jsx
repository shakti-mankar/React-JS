// import TiltedCard from "../components/TitledCard";
// import { useNavigate } from "react-router-dom";

// function Book() {

//   const navigate = useNavigate();

// const venues = [
//   {
//     img: "picklepark.webp",
//     title: "Picklepark Bhopal",
//     location: "E-1 Arera Colony (~ 5.1 km)",
//     rating: "3.00 (18)",
//     featured: true
//   },
//   {
//     img: "bhelOfficers.webp",
//     title: "BHEL'S OFFICERS CLUB",
//     location: "Berkheda (~ 6.0 km)",
//     rating: "5.00 (3)"
//   },
//   {
//     img: "olympo.webp",
//     title: "Olympo Badminton Academy",
//     location: "Gulmohar Colony (~ 7.9 km)",
//     rating: "3.67 (3)"
//   },

  

//   {
//     img: "LetsPadelBhopal.avif",
//     title: "Lets Padel Bhopal",
//     location: "National Law Institute University (~ 8.4 km)",
//     rating: "5.00 (1)",
//     bookable: true
//   },
//   {
//     img: "TheUmbrellaAcademy.avif",
//     title: "The Umbrella Academy",
//     location: "Vidhya Nagar Phase-2 (~ 9.6 km)",
//     rating: "5.00 (12)",
//     bookable: true
//   },
//   {
//     img: "FlySportsClub.avif",
//     title: "Fly Sports Club",
//     location: "Bagmugaliya (~ 10.1 km)",
//     rating: "5.00 (4)",
//     bookable: true
//   },
//   {
//     img: "SunriseBadmintonClub.avif",
//     title: "Sunrise Badminton Club",
//     location: "Nand Gaon (~ 10.4 km)",
//     rating: "5.00 (2)",
//     bookable: true
//   },
//   {
//     img: "SmashClubBadmintonandPickleballArena.avif",
//     title: "Smash Club : Badminton and Pickleball Arena",
//     location: "Bagmugaliya (~ 10.6 km)",
//     rating: "5.00 (4)",
//     bookable: true
//   },
//   {
//     img: "GreenspaceTurfandsportsClub.avif",
//     title: "Greenspace Turf and Sports Club",
//     location: "Katara Hills (~ 14.2 km)",
//     rating: "5.00 (3)",
//     bookable: true
//   },
//   {
//     img: "BestShotsBhopalavif.avif",
//     title: "Best Shots Bhopal",
//     location: "Kohefiza (~ 4.0 km)",
//     rating: "0.00 (0)",
//     bookable: false
//   },
//   {
//     img: "RunChase.avif",
//     title: "RunChase",
//     location: "Lalghati (~ 4.3 km)",
//     rating: "0.00 (0)",
//     bookable: false
//   },
//   {
//     img: "KickOffFutsal.avif",
//     title: "Kick-Off Futsal",
//     location: "Aradhana (~ 4.4 km)",
//     rating: "0.00 (0)",
//     bookable: false
//   }
// ];
//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* TOP BAR */}
//       <div className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

//         <h1 className="text-xl font-semibold">
//           Sports Venues in Bhopal: Discover and Book Nearby Venues
//         </h1>

//       </div>

//       {/* TABS */}
//       <div className="bg-white px-6">
//         <div className="flex gap-8 border-b">
//           <button className="pb-3 border-b-2 border-green-600 text-green-600 font-medium">
//             Venues (50)
//           </button>
//           <button className="pb-3 text-gray-500">Coaching</button>
//           <button className="pb-3 text-gray-500">Events</button>
//           <button className="pb-3 text-gray-500">Memberships</button>
//         </div>
//       </div>

//       {/* CARDS */}
// <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
//   {venues.map((v, i) => (
//     <div
//       key={i}
//       className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
//     >
//       {/* IMAGE CARD */}
//       <div className="relative">
//         <TiltedCard
//           imageSrc={v.img}
//           altText={v.title}
//           captionText={v.title}
//           containerHeight="240px"
//           containerWidth="100%"
//           imageHeight="240px"
//           imageWidth="100%"
//           rotateAmplitude={10}
//           scaleOnHover={1.03}
//           showTooltip={false}
//           displayOverlayContent={false}
//           className="w-full"
//         />

//         {/* BADGES ON IMAGE */}
//         <div className="absolute bottom-3 left-3 flex gap-2">
//           {v.featured && (
//             <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium shadow">
//               Featured
//             </span>
//           )}

//           <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
//             Bookable
//           </span>
//         </div>
//       </div>

//       {/* DETAILS SECTION */}
//       <div className="p-5 space-y-4">
//         {/* TITLE + RATING */}
//         <div className="flex justify-between items-start gap-3">
//           <h3 className="text-lg font-semibold text-gray-900 leading-snug">
//             {v.title}
//           </h3>
//           <span className="text-sm font-medium text-yellow-500 whitespace-nowrap">
//             ⭐ {v.rating}
//           </span>
//         </div>

//         {/* LOCATION */}
//         <p className="text-sm text-gray-500">{v.location}</p>

//         {/* SPORTS */}
//         <div className="flex gap-2 flex-wrap">
//           <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
//             🏏 Cricket
//           </span>
//           <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
//             ⚽ Football
//           </span>
//         </div>

//         {/* EXTRA DETAILS */}
//         <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
//           <p>
//             <span className="font-medium text-gray-800">Availability:</span>{" "}
//             Open for booking
//           </p>
//           <p>
//             <span className="font-medium text-gray-800">Type:</span> Outdoor
//             Sports Venue
//           </p>
//         </div>

//         {/* BUTTON */}
//         <button
//           onClick={() => navigate(`/BookingForm/${i}`)}
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-medium transition duration-300"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }

// export default Book;


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
      featured: true,
      bookable: true,
      sports: ["Pickleball"],
      type: "Outdoor Sports Venue",
      karma: 3,
      courts: ["Court 1", "Court 2", "Court 3"]
    },
    {
      img: "bhelOfficers.webp",
      title: "BHEL'S OFFICERS CLUB",
      location: "Berkheda (~ 6.0 km)",
      rating: "5.00 (3)",
      bookable: true,
      sports: ["Badminton"],
      type: "Indoor Sports Venue",
      karma: 5,
      courts: ["Wood Court 1", "Wood Court 2"]
    },
    {
      img: "olympo.webp",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)",
      bookable: true,
      sports: ["Badminton"],
      type: "Indoor Sports Venue",
      karma: 4,
      courts: ["Blue Court 1", "Blue Court 2"]
    },
    {
      img: "LetsPadelBhopal.avif",
      title: "Lets Padel Bhopal",
      location: "National Law Institute University (~ 8.4 km)",
      rating: "5.00 (1)",
      bookable: true,
      sports: ["Padel"],
      type: "Outdoor Sports Venue",
      karma: 5,
      courts: ["Padel Court 1"]
    },
    {
      img: "TheUmbrellaAcademy.avif",
      title: "The Umbrella Academy",
      location: "Vidhya Nagar Phase-2 (~ 9.6 km)",
      rating: "5.00 (12)",
      bookable: true,
      sports: ["Pickleball", "Badminton"],
      type: "Indoor Sports Venue",
      karma: 6,
      courts: ["Court A", "Court B", "Court C"]
    },
    {
      img: "FlySportsClub.avif",
      title: "Fly Sports Club",
      location: "Bagmugaliya (~ 10.1 km)",
      rating: "5.00 (4)",
      bookable: true,
      sports: ["Football", "Cricket"],
      type: "Outdoor Sports Venue",
      karma: 4,
      courts: ["Turf 1"]
    },
    {
      img: "SunriseBadmintonClub.avif",
      title: "Sunrise Badminton Club",
      location: "Nand Gaon (~ 10.4 km)",
      rating: "5.00 (2)",
      bookable: true,
      sports: ["Badminton"],
      type: "Indoor Sports Venue",
      karma: 5,
      courts: ["Court 1", "Court 2"]
    },
    {
      img: "SmashClubBadmintonandPickleballArena.avif",
      title: "Smash Club : Badminton and Pickleball Arena",
      location: "Bagmugaliya (~ 10.6 km)",
      rating: "5.00 (4)",
      bookable: true,
      sports: ["Badminton", "Pickleball"],
      type: "Indoor Sports Venue",
      karma: 5,
      courts: ["Arena 1", "Arena 2", "Arena 3"]
    },
    {
      img: "GreenspaceTurfandsportsClub.avif",
      title: "Greenspace Turf and Sports Club",
      location: "Katara Hills (~ 14.2 km)",
      rating: "5.00 (3)",
      bookable: true,
      sports: ["Football", "Cricket"],
      type: "Outdoor Sports Venue",
      karma: 4,
      courts: ["Main Turf"]
    },
    {
      img: "BestShotsBhopalavif.avif",
      title: "Best Shots Bhopal",
      location: "Kohefiza (~ 4.0 km)",
      rating: "0.00 (0)",
      bookable: false,
      sports: ["Football"],
      type: "Outdoor Sports Venue",
      karma: 2,
      courts: ["Court 1"]
    },
    {
      img: "RunChase.avif",
      title: "RunChase",
      location: "Lalghati (~ 4.3 km)",
      rating: "0.00 (0)",
      bookable: false,
      sports: ["Cricket"],
      type: "Outdoor Sports Venue",
      karma: 2,
      courts: ["Ground 1"]
    },
    {
      img: "KickOffFutsal.avif",
      title: "Kick-Off Futsal",
      location: "Aradhana (~ 4.4 km)",
      rating: "0.00 (0)",
      bookable: false,
      sports: ["Football"],
      type: "Outdoor Sports Venue",
      karma: 2,
      courts: ["Futsal Court 1"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-between bg-white px-6 py-5 shadow-sm">
        <h1 className="text-xl font-semibold">
          Sports Venues in Bhopal: Discover and Book Nearby Venues
        </h1>
      </div>

      <div className="bg-white px-6">
        <div className="flex gap-8 border-b">
          <button className="border-b-2 border-green-600 pb-3 font-medium text-green-600">
            Venues (50)
          </button>
          <button className="pb-3 text-gray-500">Coaching</button>
          <button className="pb-3 text-gray-500">Events</button>
          <button className="pb-3 text-gray-500">Memberships</button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        {venues.map((v, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
          >
            <div className="relative">
              <TiltedCard
                imageSrc={v.img}
                altText={v.title}
                captionText={v.title}
                containerHeight="240px"
                containerWidth="100%"
                imageHeight="240px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.03}
                showTooltip={false}
                displayOverlayContent={false}
                className="w-full"
              />

              <div className="absolute bottom-3 left-3 flex gap-2">
                {v.featured && (
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-medium text-black shadow">
                    Featured
                  </span>
                )}

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium text-white shadow ${
                    v.bookable ? "bg-green-600" : "bg-red-500"
                  }`}
                >
                  {v.bookable ? "Bookable" : "Not Bookable"}
                </span>
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-gray-900">
                  {v.title}
                </h3>
                <span className="whitespace-nowrap text-sm font-medium text-yellow-500">
                  ⭐ {v.rating}
                </span>
              </div>

              <p className="text-sm text-gray-500">{v.location}</p>

              <div className="flex flex-wrap gap-2">
                {v.sports.map((sport, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {sport}
                  </span>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-800">Availability:</span>{" "}
                  {v.bookable ? "Open for booking" : "Currently unavailable"}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Type:</span> {v.type}
                </p>
              </div>

              <button
                onClick={() => navigate("/bookingform", { state: { venue: v } })}
                disabled={!v.bookable}
                className={`w-full rounded-xl py-2.5 font-medium text-white transition duration-300 ${
                  v.bookable
                    ? "bg-green-600 hover:bg-green-700"
                    : "cursor-not-allowed bg-gray-400"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;