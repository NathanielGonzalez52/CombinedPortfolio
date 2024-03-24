import React from 'react'
import Navbar from "../navbar";
import Footer from "../footer";
import {Dark as DarkVariable} from "../dark";
import Projects from "./projects";


export default function Home() {
  return (
    <>
    <DarkVariable>
      <Navbar />
      <Projects />
      <Footer />
    </DarkVariable>
    </>
  )
}
