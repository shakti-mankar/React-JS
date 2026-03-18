import { useParams } from "react-router-dom";

function BookingForm() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-2xl font-semibold mb-4">
          Booking Page
        </h1>

        <p className="text-gray-600">
          You are booking venue ID: <span className="font-bold">{id}</span>
        </p>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default BookingForm;