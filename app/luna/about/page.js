"use client";
import React from 'react';
import "./page.css";
import Navbar from "../NavbarLuna";
import Footer from "../Footer";
import Fade from "react-awesome-reveal";
import Image from "next/image";
import About from "./About";

export default function page() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  )
}
