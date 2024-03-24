"use client";
import Link from "next/link";
import React from 'react'
import "./Landing.css"
import {Link as Scroll} from "react-scroll";
import Fade from "react-awesome-reveal";
import Image from "next/image";

export default function Landing() {

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
    <div className = "box">
      <Fade triggerOnce={true} duration="1000">
        <div className = "logo-box">
          <Image
          className="logo"
          src={"/senortaco_images/senor_taco.png"}
          alt={"company logo"}
          width={180}
          height={260}
          />
          {/* <img className = "logo" src="../images/senor_taco.png" alt="I no work"></img> */}
        </div>
        <div className = "hook">
          <h1>¡HECHO CON SABOR!</h1>
          <hr></hr>
          <h3>9213 Valley View St, Cypress CA 90630</h3>
          <div className = "info">
            <h4><i class="fa-solid fa-phone"></i> (714) 828-8650</h4>
            <div className = "hours">
            <h3><i class="fa-solid fa-clock"></i> Hours</h3>
            <h4>Sunday-Thursday: 8:00AM - 10:00PM</h4>
            <h4>Friday-Saturday: 8:00AM - 12:00AM</h4>
            </div>
            <div className = "socials">
              <a className="fb-site" href="https://www.facebook.com/pages/category/Fast-Food-Restaurant/Senor-Taco-165819833562758/"><i class="fa-brands fa-facebook fa-2x"></i></a>
              <a className="yelp-site" href="https://www.yelp.com/biz/se%C3%B1or-taco-cypress-2"><i class="fa-brands fa-yelp fa-2x"></i></a>
            </div>
          </div>
        </div>

        <Scroll
          to="menu"
          className="nav-links"
          smooth={true}
          duration={85}
          onSetActive={handleSetActive}
        >
          <button className = "menu-button">
            <p className = "btn-text">Check Out Our Menu!</p>
          </button>
        </Scroll>
        </Fade>

    </div>
    </>
  )
}
