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
                <div className="pic-slide">
                  <Image 
                    className="pic"
                    src={"/images/SenorTaco_1.png"}
                    alt="SenorTaco 1 Webpage"
                    width={1000}
                    height={380}
                  />
                  <a className="visit" href="./senor2taco">Visit Me!</a>
                </div>
                <div>
                  <Image 
                    className="pic"
                    src={"/images/SenorTaco_2.png"}
                    alt="SenorTaco 2 Webpage"
                    width={1000}
                    height={380}
                    />
                  <a className="visit" href="./senortaco">Visit Me!</a>
                </div>
                <div>
                  <Image 
                    className="pic"
                    src={"/images/Luna.png"}
                    alt="Luna Website"
                    width={1000}
                    height={380}
                  />
                  <a className="visit" href="./luna">Visit Me!</a>
              </div>
              <div>
                  <Image 
                    className="pic"
                    src={"/images/goldchick.png"}
                    alt="golden-chicken"
                    width={1000}
                    height={380}
                  />
                  <a className="visit" href="./goldchicken">Visit Me!</a>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}