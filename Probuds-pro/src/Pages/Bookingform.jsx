// import { useState } from "react";

// function BookingForm() {
//   const [duration, setDuration] = useState(1);

//   return (
//     <div className="min-h-screen bg-[#f7f7f7] px-6 py-9">
//       <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-[585px_1fr]">
        
//         {/* Left Form Card */}
//         <div className="overflow-hidden rounded-[12px] border border-[#d9dee3] bg-white">
//           <div className="px-4 pt-4 pb-3">
//             <h1 className="text-[24px] font-bold leading-none text-[#1f4263]">
//               Picklepark Bhopal
//             </h1>
//             <p className="mt-2 text-[16px] text-[#24384d]">E-1 Arera Colony</p>
//           </div>

//           <div className="bg-[#36d10f] py-3 text-center text-[17px] font-semibold text-white">
//             Earn 3 karma points on every booking
//           </div>

//           <div className="px-6 py-6">
//             <div className="space-y-30">
//               {/* Sports */}
//               <div className="mb-7 grid grid-cols-[150px_1fr] items-center gap-6">
//                 <label className="text-[19px] font-normal text-black">Sports</label>
//                 <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
//                   <div className="flex items-center gap-3">
//                     <span className="text-[24px] text-[#42515f]">🏓</span>
//                     <span className="text-[18px] font-semibold text-black">Pickleball</span>
//                   </div>
//                   <select name="" id="" className="text-[22px] text-[#7b8d82]" >
//                     <option value=""></option>
//                     <option value="">Pickleball</option>
//                   </select>
                 
//                 </div>
//               </div>

//               {/* Date */}
//               <div className="mb-7 grid grid-cols-[150px_1fr] items-center gap-6">
//                 <label className="text-[19px] font-normal text-black">Date</label>
//                 <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
//                   <span className="text-[18px] font-semibold text-black">2026-03-18</span>
//                   <span className="text-[28px] text-[#7b8d82]">📅</span>
//                 </div>
//               </div>

//               {/* Start Time */}
//               <div className="mb-7 grid grid-cols-[150px_1fr] items-center gap-6">
//                 <label className="text-[19px] font-normal text-black">Start Time</label>
//                 <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
//                   <span className="text-[18px] font-semibold text-black">01:30 PM</span>
//                   <span className="text-[28px] text-[#7b8d82]">🕘</span>
//                 </div>
//               </div>

//               {/* Duration */}
//               <div className="mb-7 grid grid-cols-[150px_1fr] items-center gap-6">
//                 <label className="text-[19px] font-normal text-black">Duration</label>
//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={() => setDuration((prev) => Math.max(1, prev - 1))}
//                     className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#eef1f3] text-[32px] leading-none text-[#c4c9ce]"
//                   >
//                     −
//                   </button>

//                   <span className="text-[18px] font-medium text-[#20344a]">
//                     {duration} Hr
//                   </span>

//                   <button
//                     onClick={() => setDuration((prev) => prev + 1)}
//                     className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#06c167] text-[36px] leading-none text-white"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Court */}
//               <div className="mb-8 grid grid-cols-[150px_1fr] items-center gap-6">
//                 <label className="text-[19px] font-normal text-black">Court</label>
//                 <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
//                   <span className="text-[18px] font-semibold text-black">--Select Court--</span>
//                   <span className="text-[22px] text-[#7b8d82]">⌄</span>
//                 </div>
//               </div>

//               {/* Button */}
//               <div className="pt-1">
//                 <button className="h-[58px] w-full rounded-[8px] bg-[#eef0ef] text-[18px] font-semibold text-[#a7afbc]">
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Cart Box */}
//         <div className="h-fit rounded-[12px] border border-[#d9dee3] bg-white">
//           <div className="flex min-h-[230px] flex-col items-center justify-center">
//             <div className="text-[120px] leading-none text-[#b9b9b9]">🛒</div>
//             <p className="-mt-1 text-[20px] font-medium text-[#1f4263]">Cart Is Empty</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookingForm;


import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Bookingform() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const venue = state?.venue;

  const [duration, setDuration] = useState(1);
  const [selectedSport, setSelectedSport] = useState(venue?.sports?.[0] || "");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedDate, setSelectedDate] = useState("2026-03-18");
  const [selectedTime, setSelectedTime] = useState("01:30 PM");

  if (!venue) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-6">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-red-500">
            No booking data found
          </h2>
          <button
            onClick={() => navigate("/book")}
            className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isAddToCartEnabled = selectedSport && selectedCourt && selectedDate && selectedTime;

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-6 py-9">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-[585px_1fr]">
        <div className="overflow-hidden rounded-[12px] border border-[#d9dee3] bg-white shadow-sm">
          <div className="border-b border-gray-100 px-4 pt-4 pb-3">
            <h1 className="text-[24px] font-bold leading-none text-[#1f4263]">
              {venue.title}
            </h1>
            <p className="mt-2 text-[16px] text-[#24384d]">{venue.location}</p>
          </div>

          <div className="bg-[#36d10f] py-3 text-center text-[17px] font-semibold text-white">
            Earn {venue.karma} karma points on every booking
          </div>

          <div className="px-6 py-6">
            <div className="space-y-7">
              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                <label className="text-[19px] font-normal text-black">Sports</label>
                <div className="flex h-[60px] items-center rounded-[10px] border border-[#d8dde3] px-4">
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="h-full w-full bg-transparent text-[18px] font-semibold text-black outline-none"
                  >
                    {venue.sports.map((sport, index) => (
                      <option key={index} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                <label className="text-[19px] font-normal text-black">Date</label>
                <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-transparent text-[18px] font-semibold text-black outline-none"
                  />
                </div>
              </div>

              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
  <label className="text-[19px] font-normal text-black">Start Time</label>

  <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
    <input
      type="time"
      onChange={(e) => setSelectedTime(e.target.value)}
      className="w-full bg-transparent text-[18px] font-semibold text-black outline-none"
    />

    <select
      className="ml-4 rounded-md border border-gray-300 bg-white px-3 py-2 text-[15px] font-medium text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
    >
      <option value="">01:00 PM</option>
      <option value="">02:00 PM</option>
      <option value="">03:00 PM</option>
      <option value="">04:00 PM</option>
      <option value="">05:00 PM</option>
      <option value="">06:00 PM</option>
      <option value="">07:00 PM</option>
      <option value="">08:00 PM</option>
      <option value="">09:00 PM</option>
      <option value="">10:00 PM</option>
    </select>
  </div>
</div>
              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                <label className="text-[19px] font-normal text-black">Duration</label>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setDuration((prev) => Math.max(1, prev - 1))}
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#eef1f3] text-[32px] leading-none text-[#c4c9ce] transition hover:bg-[#e3e8eb]"
                  >
                    −
                  </button>

                  <span className="text-[18px] font-medium text-[#20344a]">
                    {duration} Hr
                  </span>

                  <button
                    onClick={() => setDuration((prev) => prev + 1)}
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#06c167] text-[36px] leading-none text-white transition hover:scale-105"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                <label className="text-[19px] font-normal text-black">Court</label>
                <div className="flex h-[60px] items-center rounded-[10px] border border-[#d8dde3] px-4">
                  <select
                    value={selectedCourt}
                    onChange={(e) => setSelectedCourt(e.target.value)}
                    className="h-full w-full bg-transparent text-[18px] font-semibold text-black outline-none"
                  >
                    <option value="">--Select Court--</option>
                    {venue.courts.map((court, index) => (
                      <option key={index} value={court}>
                        {court}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-1">
                <button
                  disabled={!isAddToCartEnabled}
                  className={`h-[58px] w-full rounded-[8px] text-[18px] font-semibold transition ${
                    isAddToCartEnabled
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-[#eef0ef] text-[#a7afbc]"
                  }`}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-[12px] border border-[#d9dee3] bg-white shadow-sm">
          <div className="flex min-h-[230px] flex-col items-center justify-center">
            <div className="text-[120px] leading-none text-[#b9b9b9]">🛒</div>
            <p className="-mt-1 text-[20px] font-medium text-[#1f4263]">Cart Is Empty</p>
            <p className="mt-2 text-sm text-gray-500">
              Select sport, date, time and court to continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingform;