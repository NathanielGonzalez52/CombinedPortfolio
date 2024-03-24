import React from "react";
import "./Card.css";
import Bounce from "react-awesome-reveal";
import Image from "next/image"

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <h3 className="review">{props.review}</h3>
      </div>
      <div className="bottom">
      <h2 className="heading name">{props.name}</h2>
      <Image
        className="circle-img"
        width={115}
        height={115}
        src={props.img}
        alt="Contact Person"
      />
        {/* <img className="circle-img" src={props.img} alt="alt-image" /> */}
      </div>
    </div>
  );
}

export default Card;
