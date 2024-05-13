"use client";
import React from 'react';
import Navbar from "../NavbarLuna";
import Footer from "../Footer";
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
