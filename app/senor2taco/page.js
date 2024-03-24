import React from 'react'
import HeroSection from './HeroSection';
import StoreInfo from './StoreInfo';
import About from './About';
import Navbar from "./Navbar";

import Footer from "./Footer";

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
