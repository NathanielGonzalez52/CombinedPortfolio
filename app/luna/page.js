"use client";
import React, { Component } from 'react'; 
import "./page.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./NavbarLuna";
import Shop from "./Shop";
import Update from "./Update";
import Footer from "./Footer";
import Fade from "react-awesome-reveal";
import Image from 'next/image';
import ArtDisplay from "./ArtDisplay";
// import Return from "./ReturnLuna";

export default function page() {

  return (
    <>
      {/* <Return /> */}
      <Navbar />
      <ArtDisplay />
      <Update />
      <Shop />
      <Footer />
    </>
  )
}
