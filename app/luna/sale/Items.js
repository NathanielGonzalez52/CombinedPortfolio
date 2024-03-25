"use client";

import React, {useState} from 'react';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


export default function Items(props) {

  const [buttonText, setButtonText] = useState("Add to Cart");

  function defaultText() {
    setButtonText("Add to Cart");
    
  }
{/* <i class="fa-solid fa-thumbs-up"></i> */}
  function changeText() {
    setButtonText("Added!");
    setTimeout(defaultText, 600);
  }

  return (
      <div className="for-sale"> 
      <Zoom>
        <img className="display" src={props.img} alt="merch"></img>
        </Zoom>
          <p className="item-name">{props.name}</p>
          <div className="descriptor">
            <p className="item-price">{props.price}</p>
          </div>
          <button onClick={changeText} type="submit" className="to-cart">{buttonText}</button>
      </div>
  )
}
