import React from "react";
import Navbar from "../src/nav_component/Navbar";
import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Rootlayout;
