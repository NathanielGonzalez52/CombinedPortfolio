"use client";

import React from 'react';
import "./Deliver.css";
import {Fade} from "react-awesome-reveal";

export default function Deliver() {
  return (
    <Fade direction={"right"} triggerOnce={true} duration={1100}>
      <div className = "deliver">
        <h1 className = "deli-message">We Deliver!</h1>
        <hr className = "delivery-line"></hr>
        <div className = "apps">
            <a href = "https://www.ubereats.com/store/sabor-mi-tierra/lLi2aK8aRDmNDtbnw2dybQ"><div className = "eats square"></div></a>
            <a href = "https://postmates.com/store/sabor-mi-tierra/lLi2aK8aRDmNDtbnw2dybQ?client=customer.web&version=3.0.0"><div className = "post square"></div></a>
            <a href = "https://www.grubhub.com/restaurant/sabor-mi-tierra-802-w-la-palma-ave-anaheim/2562653"><div className = "grub square"></div></a>
            <a href = "https://www.doordash.com/store/sabor-mi-tierra-anaheim-1755009/"><div className = "dash square"></div></a>    
        </div>
      </div>
    </Fade>
  )
}
