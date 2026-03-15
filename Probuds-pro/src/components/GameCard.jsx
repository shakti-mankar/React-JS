function GameCard({ name, game, time, location }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="font-semibold">
        {game} Game
      </h3>

      <p className="text-gray-600">
        {name} is going
      </p>

      <p className="text-sm text-gray-500 mt-2">
        {time}
      </p>

      <p className="text-sm text-gray-500">
        📍 {location}
      </p>

    </div>
  );
}

export default GameCard;