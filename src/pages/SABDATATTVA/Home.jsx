import React from "react";

const Navbar = React.lazy(() => import("../../components/SABDATATTVA/Navbar"));
const Hero = React.lazy(() => import("../../components/SABDATATTVA/Home/Hero"));
const Footer = React.lazy(() => import("../../components/SABDATATTVA/Footer"));
import About from "../../components/SABDATATTVA/Home/About";
// import Highlights from "../../components/SABDATATTVA/Home/Highlights";
import Gallery from "../../components/SABDATATTVA/Home/Gallery";
// import Testimonials from "../../components/SABDATATTVA/Home/Testimonials";
import Faq from "../../components/SABDATATTVA/Home/Faq";

import "../../styles/SABDATATTVA/circles.css"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;