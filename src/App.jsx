import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./pages/SUMUN/Team";
import Sumun from "./pages/SUMUN/Home";
import Sabdatattva from "./pages/SABDATATTVA/Home";
import Committee from "./pages/SUMUN/Committee";
import LoadingComponent from "./components/shared/Loader";

const router = createBrowserRouter([
  {
    path: "/sabdatattva",
    element: <Sabdatattva />,
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
