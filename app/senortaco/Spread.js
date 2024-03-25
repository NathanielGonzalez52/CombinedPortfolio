"use client";

import React, {useState} from 'react'
import "./Spread.css";
import FoodDisplay from './FoodDisplay';
import Food from "./FoodSenorTaco";
import {Slide as Slide, Fade as Fade} from "react-awesome-reveal";

export default function Spread() {

  return (
    <div className="spread-title">
    <Slide triggerOnce={true}>
      <h1>Not Sure What to Get?</h1>
      <h2>Feast Your Eyes on Our Fan Favorites.</h2>
    </Slide>
    <Fade duration={600} delay={710} triggerOnce={true}>
      <div className="spread-display">
        {Food.map((foodItem, index) => {
              return (
                <FoodDisplay
                  key={index}
                  id={index}
                  name={foodItem.name}
                  img={foodItem.imgURL}
                  description={foodItem.description}
              />
            )
          })
          }
      </div>
    </Fade>

    </div>
  )
};
