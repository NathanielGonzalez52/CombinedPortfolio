"use client";

import React, { useContext } from 'react'
import Navbar from "../navbar";
import Fade from "react-reveal/Fade";
import Footer from "../footer";
import {Dark as DarkVariable} from "../dark";
import Toggle from '../toggle';
import Contact from "./contact";

export default function Home() {

  return (
    <>
    <DarkVariable>
        <Navbar />
        <Fade duration={1500}>
            <Contact />
        </Fade>
        <Footer />
    </DarkVariable>
    </>
  )
}

{/* <a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Freepik - Flaticon</a> */}