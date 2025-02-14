import React from "react";
import { useEffect } from "react";
const Navbar = React.lazy(() => import("../../components/SABDATATTVA/Navbar"));
const Hero = React.lazy(() => import("../../components/SABDATATTVA/Home/Hero"));
const Footer = React.lazy(() => import("../../components/shared/Footer"));
import About from "../../components/SABDATATTVA/Home/About";
import Faq from "../../components/SABDATATTVA/Home/Faq";

import EventGuidelines from "../../components/SABDATATTVA/Home/Guideline";


const Sabdatattva = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
        sessionStorage.setItem("reloaded", "true");
        window.location.reload();
    } else {
        sessionStorage.removeItem("reloaded"); // So it reloads again on the next visit
    }
}, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EventGuidelines/>
      <Faq />
      <Footer />
    </div>
  );
};

export default Sabdatattva;