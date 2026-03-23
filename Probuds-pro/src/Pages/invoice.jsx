import { useLocation, useNavigate } from "react-router-dom";

function Invoice() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cartItems = state?.cartItems || [];
  const totalAmount = state?.totalAmount || 0;
  const venue = state?.venue;

  if (!cartItems.length) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <button
          onClick={() => navigate("/book")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  const invoiceId = "INV-" + Date.now();
  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* HEADER */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold text-green-600">Playo</h1>
            <p className="text-gray-500 text-sm">
              Sports Booking Invoice
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Invoice ID</p>
            <p className="font-semibold">{invoiceId}</p>

            <p className="text-sm text-gray-500 mt-2">Date</p>
            <p className="font-semibold">{today}</p>
          </div>
        </div>

        {/* VENUE INFO */}
        <div className="mt-6 border-b pb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Venue Details
          </h2>

          <p className="mt-2 font-medium">{venue?.title}</p>
          <p className="text-gray-500">{venue?.location}</p>
        </div>

        {/* BOOKING TABLE */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Booking Details
          </h2>

          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-left text-sm">
              <tr>
                <th className="p-3">Court</th>
                <th className="p-3">Sport</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Duration</th>
                <th className="p-3 text-right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t text-sm">
                  <td className="p-3">{item.court}</td>
                  <td className="p-3">{item.sport}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">
                    {item.startTime} - {item.endTime}
                  </td>
                  <td className="p-3">{item.duration} Hr</td>
                  <td className="p-3 text-right font-medium">
                    ₹ {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOTAL SECTION */}
        <div className="mt-6 flex justify-end">
          <div className="w-[300px] space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {totalAmount}</span>
            </div>

            <div className="flex justify-between">
              <span>GST (0%)</span>
              <span>₹ 0</span>
            </div>

            <div className="flex justify-between border-t pt-2 font-semibold text-lg">
              <span>Total</span>
              <span>₹ {totalAmount}</span>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t pt-6 text-center text-gray-500 text-sm">
          Thank you for booking with Playo! 🏏  
          <br />
          This is a system-generated invoice.
        </div>

      </div>
    </div>
  );
}

export default Invoice;