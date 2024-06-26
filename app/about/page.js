"use client";
import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import Fade from "react-awesome-reveal";
import {Dark as DarkVariable} from "../Dark";
import Toggle from '../Toggle';
import About from "./About";


export default function page() {
  return (
    <>
    <DarkVariable>
        <Navbar />
        <About />
        <Footer />
    </DarkVariable>
    </>
  )
}

