import { useAtom } from "jotai";
import { userId } from "../../store/URLs";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [,setLogin] = useAtom(userId);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          _Scan_Url_
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link
            to="/homepage"
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
          {!localStorage.getItem('token') ? <Link
            to="/signin"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </Link>
          :
          <div
            className="hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer"
            onClick={()=> {
              localStorage.removeItem('token')
              setLogin(null);
              navigate('/signin');
            }}
          >
            Logout
          </div>}
        </div>
      </div>
    </nav>
  );
}
