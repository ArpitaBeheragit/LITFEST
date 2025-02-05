import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/SUMUN/Team";
import Sumun from "./pages/SUMUN/Home";
import Sabdatattva from "./pages/SABDATATTVA/Home";
import Committee from "./pages/SUMUN/Committee";
import "./App.css";
import LoadingComponent from "./components/shared/Loader";

const router = createBrowserRouter([
  {
    path: "/sabdatattva",
    element: <Sabdatattva />,
  },
  {
    path: "/sumun",
    element: <Sumun />,
    children: [
      {
        path: "committee",
        element: <Committee />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

