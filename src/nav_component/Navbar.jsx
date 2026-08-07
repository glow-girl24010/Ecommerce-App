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
    <nav className="fixed bottom-0 flex items-center justify-center w-full lg:gap-20 gap-5 bg-white border-t py-5 text-xl z-50">
      <NavLink to="/">
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
          <FiHome />
          <p className="text-sm md:text-base">Home</p>
        </div>
      </NavLink>

      <NavLink to="/products">
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
          <IoBagHandleOutline />
          <p className="text-sm md:text-base">Product</p>
        </div>
      </NavLink>

      <NavLink to="/cart">
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
          <MdOutlineShoppingCart />
          <p className="text-sm md:text-base">Cart</p>
        </div>
      </NavLink>

      <NavLink to="/about">
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
          <FaBorderAll />
          <p className="text-sm md:text-base">About</p>
        </div>
      </NavLink>

      <NavLink to="/settings">
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
          <MdOutlineSettings />
          <p className="text-sm md:text-base">Setting</p>
        </div>
      </NavLink>

      {/* Dark/Light Mode Toggle Section */}
      <div className="flex md:flex-row flex-col items-center justify-center">
        <label className=" relative inline-block w-12 h-6 cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleModeToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-700"></div>
        </label>
        <p className="text-sm md:text-base font-medium">
          {isDarkMode ? "Dark" : "Light"}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// //icons
// import { FiHome } from "react-icons/fi";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoBagHandleOutline } from "react-icons/io5";
// import { MdOutlineSettings } from "react-icons/md";
// import { FaBorderAll } from "react-icons/fa6";

// function Navbar() {
//   const [mode, setMode] = useState(true);

//   function handleMode() {
//     if (mode) {
//       setMode(false);
//     } else {
//       setMode(true);
//     }
//   }
//   //   function handleMode() {
//   //     setMode((prev) => (prev === false ? "Dark" : "Light"));
//   //   }

//   return (
//     <nav className=" fixed bottom-0 flex items-center justify-center w-full lg:gap-10 gap-5 bg-white border-t py-5 text-xl">
//       <NavLink>
//         <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//           <button>
//             <FiHome />
//           </button>
//           <p>Home</p>
//         </div>
//       </NavLink>
//       <NavLink>
//         <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//           <button>
//             <IoBagHandleOutline />
//           </button>
//           <p>Product</p>
//         </div>
//       </NavLink>
//       <NavLink>
//         <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//           <button>
//             <MdOutlineShoppingCart />
//           </button>
//           <p>Cart</p>
//         </div>
//       </NavLink>
//       <NavLink>
//         <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//           <button>
//             <FaBorderAll />
//           </button>
//           <p>About</p>
//         </div>
//       </NavLink>
//       <NavLink>
//         <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//           <button>
//             <MdOutlineSettings />
//           </button>
//           <p>Setting</p>
//         </div>
//       </NavLink>

//       <div className="flex md:flex-row flex-col items-center justify-center lg:gap-2">
//         <button onClick={handleMode}>
//           <label class="switch">
//             <input type="checkbox" />
//             <span class="slider round"></span>
//           </label>
//         </button>
//         <p>
//           {/* {mode} */}
//           {mode ? "Light" : "Dark"}
//         </p>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
