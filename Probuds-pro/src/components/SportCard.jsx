function SportCard({ image, name }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow">

      <img
        src={image}
        className="h-44 w-full object-cover"
      />

      <div className="absolute bottom-3 left-3 text-white font-semibold">
        {name}
      </div>

    </div>
  );
}

export default SportCard;