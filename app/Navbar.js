"use client"; //This is a client component
import { useRouter } from 'next/navigation'
import React, {useEffect, useState, useContext} from 'react';
import Link from "next/link";
import "./Navbar.css";
import { useActivePath } from "./Helper";
import { ThemeContext } from './Dark';
import Image from "next/image";

export default function Navbar() {

  // const [isOpen, setIsOpen] = useState(false);

  const {selectedTheme, toggleTheme} = useContext(ThemeContext);

  const checkActivePath = useActivePath()

  const router = useRouter();

  // console.log(router.pathname);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const hide = () => setClick(false);
  const show = () => setClick(true);

  useEffect(() => {
    const closeDropdown = e => {
      console.log(e)
      if (e.srcElement.className === "fas fa-bars" || e.srcElement.className === "fas fa-times") {
        handleClick;
        console.log("hello");
      }
      else {
      setClick(false);
      }
      
    };
    document.body.addEventListener("click", closeDropdown)
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);


  // useEffect(() => {
  //   let handler = () => {
  //       setClick(false);
  //   };

  //   document.addEventListener("mousedown", handler);
  // });


  // const closemobile-lunaMenu = () => setClick(false);

  // const closemobile-lunaMenu = () => setClick(false);

  const light = "/images/NG-3.png";

  const night = "/images/NG_night_2.png";

  return (
    <>
      <nav className="nav-head">
          <a className="linkk" href="/">
          <Image
            className="logo"
            src={selectedTheme==="dark" ? night : light}
            alt="logo icon"
            width={200}
            height={140}
          />
            {/* <img className="logo" src={selectedTheme === "dark" ? night : light}></img> */}
          </a>
          <div>
          <ul id="navbar" className={click ? 'navbar-luna active' : 'navbar-luna'}>
              <li><Link href="/" className={checkActivePath("/") ? 'active' : ''}>
              Home
              </Link></li>
              <li><Link href="/about" className={checkActivePath("/about") ? 'active' : ''}>
              About
              </Link></li>
              <li><Link href="/projects" className={checkActivePath("/projects") ? 'active' : ''}>
              Projects
              </Link></li>
              <li><Link href="/contact" className={checkActivePath("/contact") ? 'active' : ''}>
              Contact Me
              </Link></li>
          </ul>
          </div>      

          <div id="mobile" onClick={handleClick}>
              <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
      </nav>
    </>
  )
}
