"use client";
import React, { Component } from 'react'; 
import "./page.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Update from "./Update";
import Footer from "./Footer";
import Fade from "react-awesome-reveal";
import Image from 'next/image';


export default function page() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        fade: true,
        adaptiveHeight: false
      };
  return (
    <>
    <Fade triggerOnce={true} left duration={1200}>
      <div className="slider-cont">
        <div className ="slider">
          <Slider {...settings}>
              <div className="pic-container">  
                <Image 
                  className="pic"
                  src={"/../luna_images/blaziken.jpg"}
                  alt="blaziken art"
                  width={400}
                  height={520}
                />
              </div>
              <div className="pic-container">
              <Image 
                  className="pic"
                  src={"/../luna_images/arcanine.jpg"}
                  alt="arcanine art"
                  width={400}
                  height={520}
                />
              </div>
              <div className="pic-container">
              <Image 
                  className="pic"
                  src={"/../luna_images/man_tiger.jpg"}
                  alt="man-tiger art"
                  width={400}
                  height={520}
                />
              </div>
              <div className="pic-container">
              <Image 
                  className="pic"
                  src={"/../luna_images/anubis.jpg"}
                  alt="anubis art"
                  width={400}
                  height={520}
                />
              </div>
              <div className="pic-container">
              <Image 
                  className="pic"
                  src={"/../luna_images/techno_girl.jpeg"}
                  alt="techno-girl art"
                  width={400}
                  height={520}
                />
              </div>
              <div className="pic-container">
              <Image 
                  className="pic"
                  src={"/../luna_images/white_dragon.jpg"}
                  alt="white dragon art"
                  width={400}
                  height={520}
                />
              </div>
              
          </Slider>
        </div>
      </div>
      </Fade>
    </>
  )
}
