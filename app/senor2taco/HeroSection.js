"use client";
import React, { Component } from 'react'; 
import "./HeroSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function page() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        fade: true,
        adaptiveHeight: false
      };
  return (
    <>
      <div className="slider-cont">
        <div className ="slider">
          <Slider {...settings}>
              <div className="pic-container">
              <Image
          className="pic"
          src={"/senor2taco_images/chilaquiles_6_8.jpg"}
          alt="taco"
          width={2000}
          height={390} />
              </div>
              <div className="pic-container">
              <Image
          className="pic"
          src={"/senor2taco_images/quesa_6_8.jpg"}
          alt="quesadilla"
          width={2000}
          height={390} />
              </div>
              <div className="pic-container">
              <Image
          className="pic"
          src={"/senor2taco_images/nachos_6_8.jpg"}
          alt="nachos"
          width={2000}
          height={390} />
              </div>
              <div className="pic-container">
              <Image
          className="pic"
          src={"/senor2taco_images/wet_burrito_6_8.jpg"}
          alt="burrito"
          width={2000}
          height={390} />
              </div>
          </Slider>
        </div>
      </div>
    </>
  )
}


