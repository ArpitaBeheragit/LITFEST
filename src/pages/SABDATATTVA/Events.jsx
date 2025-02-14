import React from 'react'
// import Hero from '../components/Home/Hero'
const EventsSlider = React.lazy(() => import('../../components/SABDATATTVA/Events/EventSlider'))
const Navbar = React.lazy(() => import("../../components/SABDATATTVA/Navbar"));
const HeroTeam = React.lazy(() => import ("../../components/SABDATATTVA/Home/HeroTeam"));
const Footer = React.lazy(()=> import("../../components/shared/Footer"));

const Sabdatattva_Event = () => {
  return (
    <>
    <Navbar />
    <HeroTeam />
    <EventsSlider />
    <Footer />
    </>
  )
}

export default Sabdatattva_Event