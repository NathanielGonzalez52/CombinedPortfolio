"use client";
import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './Embla'
import './Embla.css';
import {Fade} from "react-awesome-reveal";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function EmblaSlides2() {
  return (
    <Fade direction={"right"} triggerOnce={true}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </Fade>
  )
}
