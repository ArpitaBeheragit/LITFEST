import React from "react";

const Navbar = React.lazy(() => import("../../components/SABDATATTVA/Navbar"));
const Hero = React.lazy(() => import("../../components/SABDATATTVA/Home/Hero"));
const Footer = React.lazy(() => import("../../components/SABDATATTVA/Footer"));
import About from "../../components/SABDATATTVA/Home/About";
// import Highlights from "../../components/SABDATATTVA/Home/Highlights";
import Gallery from "../../components/SABDATATTVA/Home/Gallery";
// import Testimonials from "../../components/SABDATATTVA/Home/Testimonials";
import Faq from "../../components/SABDATATTVA/Home/Faq";

import EventGuidelines from "../../components/SABDATATTVA/Home/Guideline";


const Sabdatattva = () => {
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