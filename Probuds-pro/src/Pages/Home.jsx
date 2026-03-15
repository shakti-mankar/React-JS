import VenueCard from "../components/VenueCard";
import GameCard from "../components/GameCard";
import SportCard from "../components/SportCard";

function Home() {
  return (

    <>


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



    <div className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* BOOK VENUES */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Book Venues</h2>
            <button className="text-green-600 font-semibold">
              SEE ALL VENUES →
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <VenueCard
              image="https://images.unsplash.com/photo-1587385789097-0197a7fbd179"
              title="Picklepark Bhopal"
              location="Bhojpur Club"
              rating="3.00"
            />

            <VenueCard
              image="https://images.unsplash.com/photo-1517649763962-0c623066013b"
              title="BHEL Officers Club"
              location="BHEL Campus"
              rating="5.00"
            />

            <VenueCard
              image="https://images.unsplash.com/photo-1521417531039-158e4b4b4c21"
              title="Olympo Badminton"
              location="Plot No-125"
              rating="3.67"
            />

            <VenueCard
              image="https://images.unsplash.com/photo-1505666287802-931dc83a6e3f"
              title="Lets Padel Bhopal"
              location="Kachnar Court"
              rating="5.00"
            />

          </div>
        </section>

        {/* DISCOVER GAMES */}
        <section>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Discover Games</h2>
            <button className="text-green-600 font-semibold">
              SEE ALL GAMES →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <GameCard
              name="Bharat"
              game="Badminton"
              time="Fri, 13 Mar 2026 08:00 PM"
              location="DB City Mall"
            />

            <GameCard
              name="Pradeep"
              game="Football"
              time="Sat, 14 Mar 2026 06:00 AM"
              location="Anand Nagar"
            />

          </div>

        </section>

        {/* POPULAR SPORTS */}

        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Popular Sports
          </h2>

          <div className="grid md:grid-cols-6 gap-6">

            <SportCard
              image="https://images.unsplash.com/photo-1517649763962-0c623066013b"
              name="Badminton"
            />

            <SportCard
              image="https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
              name="Football"
            />

            <SportCard
              image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
              name="Cricket"
            />

            <SportCard
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              name="Swimming"
            />

            <SportCard
              image="https://images.unsplash.com/photo-1521417531039-158e4b4b4c21"
              name="Tennis"
            />

            <SportCard
              image="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
              name="Table Tennis"
            />

          </div>

        </section>

      </div>

    </div>




</>

  );
}

export default Home;







