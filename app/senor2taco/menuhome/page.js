import React from 'react';
import Food from '../Food';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./page.css";

export default function Home() {
  return (
    <div className="menu-home">
      <Navbar />
      <Food />
      <Footer />
    </div>
  )
}
