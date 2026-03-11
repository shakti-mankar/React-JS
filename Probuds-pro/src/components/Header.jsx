import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-green-600">
          Playo
        </h1>

        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/activities" className="hover:text-green-600">Activities</Link>
          <Link to="/venues" className="hover:text-green-600">Venues</Link>
          <Link to="/community" className="hover:text-green-600">Community</Link>
        </nav>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Login
        </button>

      </div>
    </header>
  );
}

export default Header;