import React, { useEffect } from "react";
const Navbar = React.lazy(() => import("../../components/LITFEST/Navbar"));
const Hero = React.lazy(() => import("../../components/LITFEST/Hero"));
const Footer = React.lazy(() => import("../../components/shared/Footer"));
import CountdownTimer from "../../components/LITFEST/Countdown";
import About from "../../components/LITFEST/About";
import Team from "../../components/LITFEST/Teams";

const LitFest = () => {

  return (
    <div>
      <Navbar />
          <Hero/>
          <CountdownTimer />
          <About />
          <Team />
      <Footer />
    </div>
  );
};

export default LitFest;