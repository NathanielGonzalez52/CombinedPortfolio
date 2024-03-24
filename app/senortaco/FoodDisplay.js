import React, {useState} from 'react';
import Fade from "react-awesome-reveal";
import "./FoodDisplay.css";
import Image from "next/image";

export default function FoodDisplay(props) {

  const [isHovered, setIsHovered] = useState(false);

    return (
        <div className = "image-container" onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
            <Image
              className="display"
              width={320}
              height={320}
              src={props.img}
              alt="food"
            />
           {/* <img className = "display" src={props.img} alt="food"></img> */}
             {isHovered ? (
                 <div className="descriptor">
                   <h2>{props.name}</h2>
                   <p>{props.description}</p>
                 </div>
                 ): (<div className="descriptor-gone"></div>)}

        </div>
        )

}

