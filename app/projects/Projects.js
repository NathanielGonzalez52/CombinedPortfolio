"use client";
import React, { useContext, Component } from 'react';
import "./Projects.css";
import { ThemeContext } from '../Dark';
import Toggle from "../Toggle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  var settings = {
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: false,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1 
          }
        }
      ]
    };

  return (
    <>
      <div className="slider-cont">
        <Toggle />
        <h1 className="project-header"> Projects </h1>
        <div className = "center">
          <div className="react-slider">
            <div className = "slider-shape">
              <Slider {...settings}>
                <div>
                  <Image 
                    className="pic"
                    src={"/images/SenorTaco_1.png"}
                    alt="envelope"
                    width={1000}
                    height={380}
                  />
                  <Link className="visit" href="./senortaco" className="visit">Visit Me!</Link>
                </div>
                <div>
                  <Image 
                    className="pic"
                    src={"/images/SenorTaco_2.png"}
                    alt="art"
                    width={800}
                    height={380}
                    />
                </div>
                  {/* <Link href="./senor2taco" className="visit"></Link> */}
                <div>
                  <Image 
                    className="pic"
                    src={"/images/Luna.png"}
                    alt="envelope"
                    width={800}
                    height={380}
                  />
                  {/* <Link href="./luna" className="visit"></Link> */}
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}