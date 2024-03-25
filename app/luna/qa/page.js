"use client";
import React from 'react';
import Navbar from "../Navbar";
import "./page.css";
import Footer from "../Footer";
import Fade from "react-awesome-reveal";
import Qa from "./Qa";

export default function page() {
  return (
    <>
      <Navbar/>
      <Qa/>
      <Footer />
  </>
  )
}
