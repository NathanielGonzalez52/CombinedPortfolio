import React from 'react';
import "./Footer.css";
import Image from "next/image";

export default function Footer() {

  const date = new Date();

  return (
    <>
    <div className="footer">
      <Image
      className="logo-footer"
        src={"/senortaco_images/senor_taco.png"}
        alt="logo"
        width={150}
        height={130}
      />
      {/* <img className="logo-footer" src="../images/senor_taco.png" alt="logo"></img> */}
      <p className="address-footer foot-txt">9213 Valley View St, Cypress CA 90630</p>
      <p className="tele-footer foot-txt">(714) 828-8650</p>
      <p className="copyright foot-txt">© {date.getFullYear()} Senor Taco</p>
    </div>

    </>
  )

}
