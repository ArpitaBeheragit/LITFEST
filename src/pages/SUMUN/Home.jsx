import React from "react";
const Navbar = React.lazy(() => import("../../components/SUMUN/Navbar"));
const Hero = React.lazy(() => import("../../components/SUMUN/Home/Hero"));
const Footer = React.lazy(() => import("../../components/SUMUN/Footer"));
import About from "../../components/SUMUN/Home/About";
import Message from "../../components/SUMUN/Home/Message";
import Faq from "../../components/SUMUN/Home/Faq";
import Gallery from "../../components/SUMUN/Home/Gallery";
import Feedback from "../../components/SUMUN/Home/Feedback";


const Sumun = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Feedback />
      <Message />
      <Faq />
      <Footer />
    </div>
  );
};

export default Sumun;
