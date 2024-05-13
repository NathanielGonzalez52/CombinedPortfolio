"use client"; //This is a client component
import { useRouter } from 'next/navigation'
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import "./NavbarSenor2Taco.css";
import { useActivePath } from "./HelperSenor2Taco";
import Image from "next/image";

export default function Navbar() {

  const checkActivePath = useActivePath()

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
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

  // <img className="logo" src="../images/senor_taco.png"></img>

  return (
    <>
        <nav className="nav-head">
            <a className="logo-link" href="/senor2taco">
              <Image
            className="logo"
            src={"/senor2taco_images/senor_taco.png"}
            alt="senor taco logo"
            width={900}
            height={100} />
            </a>
            <div>
            <ul id="navbar-senor2taco" className={click ? 'navbar active' : 'navbar'}>
                <li><Link href="/senor2taco" className={checkActivePath("/senor2taco") ? 'active' : ''}>
                Home
                </Link></li>
                <li><Link href="/senor2taco/menuhome" className={checkActivePath("/senor2taco/menuhome") ? 'active' : ''}>
                Menu
                </Link></li>
            </ul>
            </div>

            <div id="mobile-senor2taco" onClick={handleClick}>
               <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    </>
  )
}
