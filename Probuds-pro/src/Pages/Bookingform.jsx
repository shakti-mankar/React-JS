import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Bookingform() {

  useEffect(() => {
  fetchCart();
}, []);

const fetchCart = async () => {
  try {
    const res = await axios.get("http://localhost:3000/bookings");
    setCartItems(res.data);
  } catch (err) {
    console.error(err);
  }
};








  const timeOptions = [
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
];



  const { state } = useLocation();
  const navigate = useNavigate();
  const venue = state?.venue;

  


  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [duration, setDuration] = useState(1);
  const [selectedSport, setSelectedSport] = useState(venue?.sports?.[0] || "");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedDate, setSelectedDate] = useState("2026-03-21");
  const [selectedTime, setSelectedTime] = useState("");
  const [cartItems, setCartItems] = useState([]);

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

  const hourlyPrice = venue.pricePerHour || 800;

const isAddToCartEnabled =
  name &&
  mobile &&
  selectedSport &&
  selectedCourt &&
  selectedDate &&
  selectedTime &&
  duration > 0;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime12Hour = (time24) => {
    const [hours, minutes] = time24.split(":");
    let h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${String(h).padStart(2, "0")}:${minutes} ${ampm}`;
  };

  const calculateEndTime = (time24, hrs) => {
    const [hours, minutes] = time24.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + hrs * 60;
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
  };



  const handleAddToCart = async () => {
  if (!isAddToCartEnabled) return;

  const endTime = calculateEndTime(selectedTime, duration);

  const newItem = {
    id: Date.now(),
    name:name,
    mobile:mobile,
    venueTitle: venue.title,
    sport: selectedSport,
    court: selectedCourt,
    date: selectedDate,
    startTime: selectedTime,
    endTime,
    duration,
    price: hourlyPrice * duration,
  };

  try {
    await axios.post("http://localhost:3000/bookings", newItem);
    fetchCart(); // refresh cart from DB

    // await axios.post("http://localhost:3000/bookings", newItem);
    // setCartItems((prev) => [...prev, newItem]);
  } catch (error) {
    console.error("Error saving booking:", error);
  }
};


const handleRemoveItem = async (id) => {
  try {
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    await axios.delete(`http://localhost:3000/bookings/${id}`);
  } catch (err) {
    console.error(err);
  }
};


const handleClearCart = async () => {
  try {
    await Promise.all(
      cartItems.map((item) =>
        axios.delete(`http://localhost:3000/bookings/${item.id}`)
      )
    );

    setCartItems([]); // instant UI update
  } catch (err) {
    console.error(err);
  }
};


const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);



  return (
    <div className="min-h-screen bg-[#f7f7f7] px-6 py-9">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-[585px_1fr]">
        {/* Left Form */}
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

              {/* Name */}
<div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
  <label className="text-[19px]">Name</label>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className="h-[60px] rounded-[10px] border px-4 text-[18px] outline-none"
  />
</div>

{/* Mobile */}
<div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
  <label className="text-[19px]">Mobile</label>
  <input
    type="number"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    placeholder="Enter mobile number"
    className="h-[60px] rounded-[10px] border px-4 text-[18px] outline-none"
  />
</div>


              {/* Sports */}
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

              {/* Date */}
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

                            {/* Start Time */}
                            <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                              <label className="text-[19px] font-normal text-black">Start Time</label>

                              <div className="grid items-center gap-6 md:grid-cols-[150px_1fr]">
                {/* <label className="text-[19px] font-normal text-black">Start Time</label> */}

                <div className="flex h-[60px] items-center justify-between rounded-[10px] border border-[#d8dde3] px-4">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="h-full w-full bg-transparent text-[18px] font-semibold text-black outline-none"
                  >
                    <option value="">Select Time</option>

                    {timeOptions.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


                             </div>

              {/* Duration */}
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

              {/* Court */}
              <div className="grid items-start gap-6 md:grid-cols-[150px_1fr]">
                <label className="pt-4 text-[19px] font-normal text-black">Court</label>

                <div>
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

                  {!selectedCourt && (
                    <p className="mt-3 text-[15px] font-medium text-[#7b8d82]">
                      No Courts Available For The Selected Time
                    </p>
                  )}
                </div>
              </div>

              {/* Add to cart */}
              <div className="pt-1">
                <button
                  onClick={handleAddToCart}
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

  <div className="h-fit rounded-[12px] border border-[#d9dee3] bg-white shadow-sm">

  {/* Header */}
  <div className="flex items-center justify-between border-b px-6 py-4">
    <h2 className="text-[20px] font-bold">Cart ({cartItems.length})</h2>

    {cartItems.length > 0 && (
      <button onClick={handleClearCart} className="text-red-500 text-xl">
        🗑
      </button>
    )}
  </div>

  {/* Empty */}
  {cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-6xl text-gray-300">🛒</div>
      <p className="mt-2 text-gray-500">Cart Is Empty</p>
    </div>
  ) : (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="border-b px-6 py-5">

          {/* Top */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-lg">{item.court}</p>

            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-500 text-xl"
            >
              ⊗
            </button>
          </div>

          {/* Details */}
          <div className="mt-3 space-y-2 text-[15px] text-gray-700">
            <p>👤 {item.name}</p>
            <p>📱 {item.mobile}</p>
            <p>📅 {item.date}</p>

            <p>
              🕒 {item.startTime} to {formatTime12Hour(item.endTime)}
            </p>

            <p>💰 INR {item.price}</p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="p-6">
        <button
          onClick={() =>
            navigate("/invoice", {
              state: { cartItems, totalAmount, venue },
            })
          }
          className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg"
        >
          Proceed INR {totalAmount.toFixed(2)}
        </button>
      </div>
    </>
  )}
</div>

</div>
      </div>
    </div>
  );
}

export default Bookingform;



