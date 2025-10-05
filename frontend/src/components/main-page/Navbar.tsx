import { useAtom } from "jotai";
import { userId } from "../../store/URLs";
import { Link, useNavigate } from "react-router-dom";
import {List } from "@mui/icons-material";
import { useState } from "react";

export function Navbar() {
  const [,setLogin] = useAtom(userId);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          _Scan_Url_
        </Link>

        {/* Links */}
        <div className="relative md:hidden">
            <List onClick={()=>{setVisible(!visible)}}/>
            {visible && <div className="absolute z-100 flex flex-col right-4 bg-gray-100 border-1 border-black rounded-l-xl rounded-br-xl gap-2 items-center text-center p-2">
                  <Link
                    to='/'
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
                    className="hover:cursor-pointer text-red-500 font-semibold"
                    onClick={()=> {
                      localStorage.removeItem('token')
                      setLogin(null);
                      navigate('/signin');
                    }}
                  >
                    Logout
                  </div>}
            </div>}           
        </div>
        <div className="md:flex items-center gap-8 text-gray-700 font-medium hidden">
          <Link
            to='/'
            className="hover:text-blue-600 transition-colors duration-200 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-600 transition-colors duration-200 hover:bg-gray-200"
          >
            Register
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-600 transition-colors duration-200 hover:bg-gray-200"
          >
            Dashboard
          </Link>
          {!localStorage.getItem('token') ? <Link
            to="/signin"
            className="hover:text-blue-600 transition-colors duration-200 hover:bg-gray-200"
          >
            Login
          </Link>
          :
          <div
              className="hover:cursor-pointer text-red-500 font-semibold"
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
