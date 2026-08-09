import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { FiHome } from "react-icons/fi";
import { MdOutlineShoppingCart, MdOutlineSettings } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa6";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronize state directly with the toggle input
  const handleModeToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <nav className="fixed bottom-0 flex items-center justify-center w-full lg:gap-20 gap-5 bg-white border-t py-5 text-xl z-50 h-17">
      <NavLink to="/">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
          <FiHome />
          <p className="text-sm md:text-base">Home</p>
        </div>
      </NavLink>

      <NavLink to="/products">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
          <IoBagHandleOutline />
          <p className="text-sm md:text-base">Product</p>
        </div>
      </NavLink>

      <NavLink to="/cart">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
          <MdOutlineShoppingCart />
          <p className="text-sm md:text-base">Cart</p>
        </div>
      </NavLink>

      <NavLink to="/about">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
          <FaBorderAll />
          <p className="text-sm md:text-base">About</p>
        </div>
      </NavLink>

      <NavLink to="/settings">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-2 hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
          <MdOutlineSettings />
          <p className="text-sm md:text-base">Setting</p>
        </div>
      </NavLink>

      {/* Dark/Light Mode Toggle Section */}
      <div className="flex md:flex-row flex-col items-center justify-center hover:bg-gray-200 hover:p-1 hover:px-5 rounded-xl transition-all duration-300">
        <label className=" relative inline-block w-12 h-6 cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleModeToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-700"></div>
        </label>
        <p className="text-sm md:text-base font-medium md:pl-2">
          {isDarkMode ? "Dark" : "Light"}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
