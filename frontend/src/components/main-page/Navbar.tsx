import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          URL Crawler
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Register
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/signin"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
