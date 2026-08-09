import React from "react";
import Rootlayout from "../layout/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Settings from "../settings/settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [{ index: true, element: <Settings /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
