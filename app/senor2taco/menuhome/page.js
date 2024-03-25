import React from 'react';
import Food from '../FoodSenor2Taco';
import Navbar from "../NavbarSenor2Taco";
import Footer from "../FooterSenor2Taco";
import "./page.css";

export default function page() {
  return (
    <div className="menu-home">
      <Navbar />
      <Food />
      <Footer />
    </div>
  )
}
