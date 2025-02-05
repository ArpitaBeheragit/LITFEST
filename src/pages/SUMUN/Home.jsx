import React from "react";
const Navbar = React.lazy(() => import("../../components/SUMUN/Navbar"));
const Hero = React.lazy(() => import("../../components/SUMUN/Home/Hero"));
const Footer = React.lazy(() => import("../../components/SUMUN/Footer"));
import CalcTimeDelta from "../../components/SUMUN/Home/Countdown";
import About from "../../components/SUMUN/Home/About";
import TimelineView from "../../components/SUMUN/Home/Timeline";
import Message from "../../components/SUMUN/Home/Message";
import Faq from "../../components/SUMUN/Home/Faq";
import Gallery from "../../components/SUMUN/Home/Gallery";
import Feedback from "../../components/SUMUN/Home/Feedback";

import "../../styles/SUMUN/circles.css"


const Sumun = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <CalcTimeDelta /> */}
      <About />
      <Gallery />
      {/* <TimelineView /> */}
      <Feedback />
      <Message />
      <Faq />
      <Footer />
    </div>
  );
};

export default Sumun;
