function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-xl font-bold mb-3">Playo</h2>
          <p className="text-gray-400">
            Connecting sports enthusiasts to play together.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Activities</li>
            <li>Venues</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">
            support@playo.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 pb-4">
        © 2026 Playo Clone
      </div>
    </footer>
  );
}

export default Footer;