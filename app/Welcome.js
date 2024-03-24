"use client";
import "./welcome.css"
import React, { useState, useEffect } from 'react';
import Type from "./Typing";
// import Fade from "react-reveal/Fade";
import {Fade} from "react-awesome-reveal";
import Footer from "./Footer";
import {dark as DarkMode} from "./Dark.js";
import Toggle from "./Toggle";

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
        <Fade triggerOnce={true} delay={6800} duration={1500}>
          <a href="/projects"><button className="projects-btn">Projects</button></a>
        </Fade>
          </div>
        <Footer/>
    </div>
    </>
  )
}
