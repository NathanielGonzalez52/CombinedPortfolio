import React from 'react'
import "./shop.css";
import Fade from "react-awesome-reveal";


export default function shop() {
  return (
    <>
    <Fade triggerOnce={true} left duration={1200}>
      <div className="shop-greet">
        <h1>Shop Collections</h1>
        <h1>Check out our unique pins and prints!</h1>
      </div>
      {/* <div className="merch-cont"> */}
          <div className="merch-pics">
              <img alt='merch' className="product" src="../luna_images/arceus.jpg"></img>
              <img alt='merch' className="product" src="../luna_images/rayquaza.jpg"></img>
          </div>
          <a href="/sale" className="to-shop">Shop Now</a>
      {/* </div> */}
    </Fade>
    </>
  )
}
