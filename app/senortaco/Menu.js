"use client";

import React from 'react';
import "./Menu.css";
import Fade from "react-awesome-reveal";
import Image from "next/image";


function Menu() {
  return (
    <Fade triggerOnce={true}>
      <div id="menu">
        <Image
        className="menu-page"
        src={"/../images/1.png"}
        alt="menu"
        width={500}
        height={600}
         />
        {/* <img className="menu-page" src="../images/1.png" alt="menu"></img> */}
      </div>
    </Fade>
  )
}

export default Menu
