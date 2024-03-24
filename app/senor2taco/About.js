"use client";

import React from "react";
import "./About.css";
import Image from "next/image";

function About() {

  return (
    <>
    <h1 id="hook" className="welcome">Bienvenidos to Senor Taco!</h1>
    <div className="about">
      <div className="about-text">
        <p className="intro">We are a Mexican restaurant in Cypress, CA 
        dedicated to authenic Mexcan flavor and authenticity! Our menu
        has a wide range of options from quesadllas, tortas, caldos, breakfast,
        hamburgers, and much more. We are located across the street from Cypress
        college and are next to Wisdom Mission School. We offer online 
        and delivery options. Thank you for your time and we hope to 
        see you soon!</p>
      </div>
      <div className="pics">
        <Image
          className="food one"
          src={"/senor2taco_images/taco.jpg"}
          alt="taco"
          width={200}
          height={120} />
        <Image 
          className="food two"
          src={"/senor2taco_images/fries.jpg"}
          alt="fries"
          width={200}
          height={180}/>
        {/* <img className="food one" src="../../images/taco.jpg"></img> */}
        {/* <img className="food two" src="../../images/fries.jpg"></img> */}
      </div>
    </div>
    </>
  )
}

export default About;
