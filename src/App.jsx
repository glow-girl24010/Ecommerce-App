import React from "react";
import Rootlayout from "../layout/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Rootlayout />, children: [{ index: true }] },
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
