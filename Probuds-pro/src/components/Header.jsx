import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          Playo
        </h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/venues">Venues</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-4">

          <Link
            to="/login"
            className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;