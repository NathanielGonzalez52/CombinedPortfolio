"use client"; 
import { useRouter } from 'next/navigation'
import React, {useEffect, useState, useContext} from 'react';
import Link from "next/link";
import Image from "next/image";
import "./ReturnSenor2Taco.css";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  useEffect(() => {
    let handler = () => {
      setClick(false);
    };

    document.addEventListener("mousedown", handler);
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="nav-head-return">
          <a className="linkk-return-luna" href="../projects"><i class="fa-solid fa-backward">&nbsp;</i>Back To The Portfolio</a>
          {/* <div id="mobile" onClick={handleClick}>
              <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div> */}
      </nav>
    </>
  )
}
