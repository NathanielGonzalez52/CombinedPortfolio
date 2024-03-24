"use client";
import React, { useContext } from 'react'
import Navbar from "../Navbar";
import {Fade} from "react-awesome-reveal";
import Footer from "../Footer";
import {Dark as DarkVariable} from "../Dark";
import Toggle from '../Toggle';
import Contact from "./Contact";

export default function Home() {

  return (
    <>
    <DarkVariable>
        <Navbar />
        <Fade triggerOnce={true} duration={1500}>
            <Contact />
        </Fade>
        <Footer />
    </DarkVariable>
    </>
  )
}

{/* <a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Freepik - Flaticon</a> */}