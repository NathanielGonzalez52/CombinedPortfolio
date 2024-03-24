"use client";

import "./welcome.css"
import React, { useState, useEffect } from 'react';
import Type from "./typing";
import Fade from "react-reveal/Fade";
import Footer from "./footer";
import {dark as DarkMode} from "./dark.js";
import Toggle from "./toggle";

export default function Welcome() {

  const [timer, setTimer] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 1050)
  }, [])


  return (
    <>
    <div className="total">
      <Toggle />
      <div className="landing">
        <Type />
        <Fade delay={6800} duration={1500}>
          <a href="/projects"><button className="projects-btn">Projects</button></a>
        </Fade>
          </div>
        <Footer/>
    </div>
    </>
  )
}
