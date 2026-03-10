
function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT CONTENT */}
        <div>

          {/* Location */}

          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full w-fit mb-6">
            <span>📍</span>
            <span className="text-gray-700">Bhopal</span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            BOOK SPORTS VENUES.
            <br />
            JOIN GAMES.
            <br />
            FIND TRAINERS NEAR YOU.
          </h1>

          {/* Sub text */}

          <p className="text-gray-600 mt-6 text-lg">
            The World’s Largest Sports Community to Book Venues,
            Find Trainers, and Join Games Near you.
          </p>

        </div>

        {/* RIGHT IMAGE SECTION */}

        <div className="grid grid-cols-2 gap-4">

          <img
            src="p1.avif"
            className="rounded-xl h-[220px] object-cover w-full"
          />

          <img
            src="p2.jpeg"
            className="rounded-xl h-[220px] object-cover w-full"
          />

          <img
            src="p3.avif"
            className="rounded-xl h-[220px] object-cover w-full"
          />

          <img
            src="p4.avif"
            className="rounded-xl h-[220px] object-cover w-full"
          />

        </div>

      </div>

    </div>
  );
}

export default Home;