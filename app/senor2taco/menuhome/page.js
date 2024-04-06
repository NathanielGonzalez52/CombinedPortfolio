import React from 'react';
import Food from '../FoodSenor2Taco';
import Navbar from "../NavbarSenor2Taco";
import Footer from "../FooterSenor2Taco";
import "./page.css";
import Return from "../ReturnSenor2Taco";



export default function page() {
  return (
    <div className="menu-home">
      <Return />
      <Navbar />
      <Food />
      <Footer />
    </div>
  )
}
