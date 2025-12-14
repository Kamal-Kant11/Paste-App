import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-4xl bg-gray-700 shadow-md rounded-b-xl flex justify-between items-center h-14 px-8 md:px-12">
        {/* Logo */}
        <div className="text-blue-300 font-bold text-2xl cursor-pointer select-none tracking-wide hover:text-white transition-colors duration-300">
          MyPasteApp
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white  font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-blue-400 shadow-md" : "hover:bg-blue-500/70"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `text-white font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                isActive ? "bg-blue-400 shadow-md" : "hover:bg-blue-500/70"
              }`
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
