"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "./EmblaCarousel.css";
import Card from './Card.js';
import People from "./People.js";

const EmblaCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({infinite:true, loop:true, dragFree:false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    <div className="embla">
      <h1>Some Words from Our Satisfied Customers!</h1>
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"> 
          <Card 
            name={People[0].name}
            img={People[0].imgURL}
            review={People[0].review}
          />
        </div>
        <div className="embla__slide">
        <Card 
            name={People[1].name}
            img={People[1].imgURL}
            review={People[1].review}
          />
        </div>
        <div className="embla__slide">
          <Card 
              name={People[2].name}
              img={People[2].imgURL}
              review={People[2].review}
            />
        </div>
      </div>
    </div>
  </div>
  <div className = "btn-box">
      <i class="fa-solid fa-angles-left fa-3x btn embla__prev" onClick={scrollPrev}></i>
      <i class="fa-solid fa-angles-right fa-3x btn embla__next" onClick={scrollNext}></i>
    </div>
    </>
  )
}

export default EmblaCarousel;
