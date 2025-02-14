import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./pages/SUMUN/Team";
import Sumun from "./pages/SUMUN/Home";
import Sabdatattva from "./pages/SABDATATTVA/Home";
import Committee from "./pages/SUMUN/Committee";
import LoadingComponent from "./components/shared/Loader";
import Sabdatattva_Event from "./pages/SABDATATTVA/Events";
import LitFest from "./pages/LITFEST/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<LitFest/>
  },
  {
    path: "/sabdatattva",
    element: <Sabdatattva />,
  },
  {
    path: "/sabdatattva/events",
    element: <Sabdatattva_Event/>
  },
  {
    path: "/sumun",
    element: <Sumun />,
  },
  {
    path: "/sumun/committee",
    element: <Committee/>
  }
]);

export default function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
