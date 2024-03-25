import React from 'react'
import HeroSection from './HeroSection';
import StoreInfo from './StoreInfoSenor2Taco';
import About from './AboutSenor2Taco';
import Navbar from "./NavbarSenor2Taco";

import Footer from "./FooterSenor2Taco";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <StoreInfo />
    <About />
    <Footer />
    </>
  )
}
