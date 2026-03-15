function VenueCard({ image, title, location, rating }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">

      <img
        src={image}
        className="h-40 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {location}
        </p>

        <span className="text-green-600 font-semibold text-sm">
          ⭐ {rating}
        </span>

      </div>

    </div>
  );
}

export default VenueCard;