import VenueCard from "../components/VenueCard";
import GameCard from "../components/GameCard";
import SportCard from "../components/SportCard";
import { useState } from "react";


function Home() {

   const blogs = [
    {
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
      title: "Learn Volleyball in 5!",
      desc: "The most simplified Volleyball manual.",
      date: "SEPTEMBER 26, 2018 | PLAYO"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Names Celebrated by Cricket",
      desc: "Understand what it takes to become a legend.",
      date: "MARCH 3, 2016 | SHERYL THOMAS"
    },
    {
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "Easy-to-Learn Badminton",
      desc: "Get a peek of game basics.",
      date: "AUGUST 2, 2019 | NIDHI PATEL"
    },
    {
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
      title: "A Spectator’s Tournament",
      desc: "How to prepare for a game.",
      date: "JANUARY 12, 2022 | PLAYO"
    }
  ];


  // 

  

  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    "How can I use Playo to book sports venues or to join sports activities?",
    "What is the Playo Partner App, and how does it help venue owners?",
    "Can I reschedule or cancel a booking made on Playo? How does it work?",
    "What is Karma on Playo?",
    "How to Host a Game on Playo?",
    "How Do I Contact Playo?",
    "What are the Benefits of Using Playo?"
  ]

  const cities = [
    "Bangalore","Chennai",
    "Hyderabad","Pune",
    "Vijayawada","Mumbai",
    "Delhi NCR","Visakhapatnam",
    "Guntur","Kochi",
    "Dubai","Qatar",
    "Australia","Oman",
    "Sri Lanka"
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }



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


    {/*  */}

       <div className="bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* BLOG SECTION */}

        <section className="bg-white p-8 rounded-2xl shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Blogs to Keep You Fit!
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden hover:shadow-lg transition"
              >

                <img
                  src={blog.img}
                  className="h-36 w-full object-cover rounded-lg"
                />

                <div className="mt-3">

                  <h3 className="font-semibold text-sm">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {blog.desc}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {blog.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>


        {/* ABOUT TEAM SECTION */}

        <section className="bg-white p-10 rounded-2xl shadow grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              About the Team
            </h2>

            <p className="text-gray-500 mb-6">
              Clarity gives you the blocks & components you need to create
              a truly professional website, landing page or admin panel
              for your SaaS.
            </p>

            <div className="flex gap-4">

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                READ OUR STORY
              </button>

              <button className="border px-6 py-3 rounded-lg font-semibold">
                WE ARE HIRING!
              </button>

            </div>

          </div>


          {/* RIGHT IMAGE GRID */}

          <div className="grid grid-cols-3 gap-4">

            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
              className="rounded-xl h-32 object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1520975922284-8b456906c813"
              className="rounded-xl h-32 object-cover col-span-2"
            />

            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
              className="rounded-xl h-32 object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
              className="rounded-xl h-32 object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1521417531039-158e4b4b4c21"
              className="rounded-xl h-32 object-cover"
            />

          </div>

        </section>

      </div>

    </div>



    <div className="bg-gray-100 min-h-screen p-10">

      {/* FAQ SECTION */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b py-3 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{faq}</p>
              <span className="text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="text-gray-500 mt-2 text-sm">
                Playo is the world’s largest sports community platform with over 5 million users. It helps you discover and book venues for 50+ sports, including football, badminton, tennis, and box cricket. Once you sign up, you can host or join games, connect with nearby players, trainers and find available slots by location, sport, and time. You also earn redeemable Karma points with every booking. [Pro Tip: Karma points are redeemable through the Playo app only. Click here - Android or iOS to download]
To dive deeper into all the features and benefits, check out our blog.
              </p>
            )}
          </div>
        ))}
      </div>

      {/* APP DOWNLOAD BANNER */}
      <div className="bg-green-600 mt-8 rounded-xl p-6 flex justify-between items-center text-white">
        <h2 className="text-xl font-semibold">
          Get the Playo app for a seamless experience!
        </h2>

        <div className="flex gap-4">
          <button className="bg-black px-4 py-2 rounded"  >
            Google Play
          </button>
          <button className="bg-black px-4 py-2 rounded">
            App Store
          </button>
        </div>
      </div>

      {/* SPORTS COMPLEXES */}
      <div className="bg-white rounded-xl p-6 shadow mt-8">
        <h2 className="text-lg font-semibold mb-6">
          Top Sports Complexes in Cities
        </h2>

        <div className="grid grid-cols-2 gap-4">

          {cities.map((city, index) => (
            <select
              key={index}
              className="border rounded-lg p-3 text-gray-600"
            >
              <option>{city}</option>
              <option>Sports Complex 1</option>
              <option>Sports Complex 2</option>
              <option>Sports Complex 3</option>
            </select>
          ))}

        </div>
      </div>

    </div>







</>

  );
}

export default Home;







