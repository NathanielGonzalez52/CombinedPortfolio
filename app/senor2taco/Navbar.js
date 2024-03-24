"use client"; //This is a client component
import { useRouter } from 'next/navigation'
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import "./Navbar.css";
import { useActivePath } from "./helper";
import Image from "next/image";

export default function Navbar() {

  const checkActivePath = useActivePath()

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  useEffect(() => {
    let handler = () => {
      setClick(false);
    };

    document.addEventListener("mousedown", handler);
  });

  // <img className="logo" src="../images/senor_taco.png"></img>

  return (
    <>
        <nav className="nav-head">
            <a className="logo-link" href="/">
              <Image
            className="logo"
            src={"/senor2taco_images/senor_taco.png"}
            alt="senor taco logo"
            width={900}
            height={100} />
            </a>
            <div>
            <ul id="navbar" className={click ? 'navbar active' : 'navbar'}>
                <li><Link href="/" className={checkActivePath("/") ? 'active' : ''}>
                Home
                </Link></li>
                <li><Link href="/menuhome" className={checkActivePath("/menuhome") ? 'active' : ''}>
                Menu
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
