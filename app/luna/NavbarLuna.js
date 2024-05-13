"use client"; //This is a client component
import { useRouter } from 'next/navigation'
import React, {useState} from 'react';
import Link from "next/link";
import "./NavbarLuna.css";
import { useActivePath } from "./Helper";
import Return from "./ReturnLuna";

export default function Navbar() {

  const checkActivePath = useActivePath()

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
        <Return />
        <nav className="nav-head">
          <a href="/luna"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="41" fill="none" viewBox="0 0 54 41"><path fill="#2A2E4E" d="M54 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path fill="#2A2E4E" fill-rule="evenodd" d="M13.75 40.794C6.156 40.794 0 34.638 0 27.044V1h5v26.044a8.75 8.75 0 0 0 8.75 8.75c4.893 0 8.75-3.771 8.75-8.544h5v7.5a1.25 1.25 0 0 0 2.5 0v-8.875a6.25 6.25 0 0 1-7.5-6.125V7.25a6.25 6.25 0 1 1 12.5 0v27.5a1.25 1.25 0 1 0 2.5 0V7.25a6.25 6.25 0 1 1 12.5 0v27.5a6.25 6.25 0 0 1-10 5A6.222 6.222 0 0 1 36.25 41a6.222 6.222 0 0 1-3.75-1.25 6.251 6.251 0 0 1-9.466-2.47c-2.456 2.197-5.723 3.514-9.284 3.514Zm30-4.794c-.69 0-1.25-.56-1.25-1.25V7.25a1.25 1.25 0 1 1 2.5 0v27.5c0 .69-.56 1.25-1.25 1.25ZM30 19.75a1.25 1.25 0 0 1-2.5 0V7.25a1.25 1.25 0 1 1 2.5 0v12.5Z" clip-rule="evenodd"></path><path fill="#2A2E4E" fill-rule="evenodd" d="M7.5 27.25a6.25 6.25 0 1 0 12.5 0v-20a6.25 6.25 0 1 0-12.5 0v20Zm6.25 1.25c-.69 0-1.25-.56-1.25-1.25v-20a1.25 1.25 0 1 1 2.5 0v20c0 .69-.56 1.25-1.25 1.25Z" clip-rule="evenodd"></path></svg></a>
          <div>
          <ul id="navbar-luna" className={click ? 'navbar active' : 'navbar'}>
              <li><Link href="/luna" className={checkActivePath("/luna") ? 'active' : ''}>
              Home
              </Link></li>
              <li><Link href="/luna/sale" className={checkActivePath("/luna/sale") ? 'active' : ''}>
              Shop
              </Link></li>
              <li><Link href="/luna/lunaabout" className={checkActivePath("/luna/lunaabout") ? 'active' : ''}>
              About
              </Link></li>
          </ul>
          </div>

          <div id="mobile-luna" onClick={handleClick}>
              <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>

    </>
  )
}
