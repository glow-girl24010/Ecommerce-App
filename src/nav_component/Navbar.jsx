import React from "react";
import { NavLink } from "react-router-dom";

//icons
import { FiHome } from "react-icons/fi";

function Navbar() {
  return (
    <nav className=" fixed bottom-0 flex items-center justify-center w-full lg:gap-10 gap-5  ">
      <NavLink>
        <div className="flex md:flex-row flex-col items-center justify-center">
          <button>
            <FiHome />
          </button>
          <p>Home</p>
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
