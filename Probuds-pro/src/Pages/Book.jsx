import TiltedCard from "../components/TitledCard";
  


function Book() {

  const venues = [
    {
      img: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179",
      title: "Picklepark Bhopal",
      location: "E-1 Arera Colony (~ 5.1 km)",
      rating: "3.00 (18)",
      featured: true
    },
    {
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "BHEL'S OFFICERS CLUB",
      location: "Berkheda (~ 6.0 km)",
      rating: "5.00 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },

    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    },
    {
      img: "https://images.unsplash.com/photo-1521417531039-158e4b4b4c21",
      title: "Olympo Badminton Academy",
      location: "Gulmohar Colony (~ 7.9 km)",
      rating: "3.67 (3)"
    }
  ];

  return (

    
    <div className="bg-gray-100 min-h-screen">

      {/* TOP BAR */}
      <div className="bg-white shadow-sm px-6 py-5 flex justify-between items-center">

        <h1 className="text-xl font-semibold">
          Sports Venues in Bhopal: Discover and Book Nearby Venues
        </h1>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search by venue name"
            className="border px-4 py-2 rounded-lg w-64"
          />

          <select className="border px-4 py-2 rounded-lg">
            <option>All Sports</option>
            <option>Badminton</option>
            <option>Football</option>
          </select>

        </div>

      </div>

      {/* TABS */}
      <div className="bg-white px-6">

        <div className="flex gap-8 border-b">

          <button className="pb-3 border-b-2 border-green-600 text-green-600 font-medium">
            Venues (50)
          </button>

          <button className="pb-3 text-gray-500">
            Coaching (0)
          </button>

          <button className="pb-3 text-gray-500">
            Events (0)
          </button>

          <button className="pb-3 text-gray-500">
            Memberships (0)
          </button>

        </div>

      </div>

      {/* VENUE CARDS */}



<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip
  displayOverlayContent
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {venues.map((v, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={v.img}
                className="h-48 w-full object-cover"
              />

              {/* FEATURED */}
              {v.featured && (
                <span className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded">
                  Featured
                </span>
              )}

              {/* BOOKABLE */}
              <span className="absolute bottom-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
                Bookable
              </span>

            </div>

            {/* CONTENT */}
            <div className="p-4">

              <div className="flex justify-between items-center">

                <h3 className="font-semibold">
                  {v.title}
                </h3>

                <span className="text-sm text-yellow-500">
                  ⭐ {v.rating}
                </span>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                {v.location}
              </p>

              {/* ICONS */}
              <div className="flex gap-3 mt-3 text-gray-400 text-lg">
                🏸 🎾
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Book;