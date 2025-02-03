import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Team from "./pages/SUMUN/Team";
// import Home from "./pages/SUMUN/Home";
import Home from "./pages/SABDATATTVA/Home";
import Committee from "./pages/SUMUN/Committee";
import "./App.css";
import LoadingComponent from "./components/shared/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Team />} />
            {/* <Route path="/committee" element={<Committee />} /> */}
            <Route path="/committee" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
