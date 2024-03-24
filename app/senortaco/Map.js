"use client";

import React from 'react';
import "./Map.css";
import {Fade} from "react-awesome-reveal";


export default function Map() {
  return (
<>
<Fade direction={"right"} triggerOnce={true} delay={100} duration={1200}>
  <h2 className="head-footer">Hungry Yet?</h2>
  <h2 className="head-footer">What Are You Waiting For?</h2>
  <div className="map-holder"></div>
</Fade>
</>
  )
}
