import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import {Dark as DarkVariable} from "../Dark";
import Projects from "./Projects";


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
