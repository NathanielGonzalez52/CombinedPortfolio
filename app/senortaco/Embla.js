"use client";
import Card from './Card.js';
import People from "./People.js";
import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const peopleCard = [
  <Card 
    key={0}
    name={People[0].name}
    img={People[0].imgURL}
    review={People[0].review}
  />,
  <Card 
  key={1}
  name={People[1].name}
  img={People[1].imgURL}
  review={People[1].review}
/>,
  <Card 
  key={2}
  name={People[2].name}
  img={People[2].imgURL}
  review={People[2].review}
/>
]

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {peopleCard.map((item, index ) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
