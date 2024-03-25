"use client";
import React from 'react';
import Merch from "./Merch.js";
import Items from "./Items.js";
import "./page.css";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import Fade from "react-awesome-reveal";
import Flip from "react-awesome-reveal";

export default function home() {

  return (
    <>
    <Fade triggerOnce={true} top duration={1200}>
    <div className="products-page">
    
    <Fade triggerOnce={true} left delay={0} duration={1200}>
      <h1 className="products-header">Original Prints</h1>
    </Fade>
      <div className="product-display">
        {Merch.map((product, index) => {
          return (
            <Items
              key={index}
              id={index}
              name={product.name}
              img={product.imgURL}
              price={product.price}
          />
        )
      })
      }
      </div>
    </div>
    </Fade>
  </>
  )
}
