"use client";
import {React, useContext} from 'react';
import "./Toggle.css"
import { ThemeContext } from './Dark';
import Image from "next/image";

export default function Toggle() {

  const {selectedTheme, toggleTheme} = useContext(ThemeContext);

  return (
          <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" 
                id="checkbox" 
                onChange={toggleTheme} 
                checked={ selectedTheme==="dark" }
                />
                <div class="slider round">
                  <Image
                    className="sun"
                    src={"/../images/sun.svg"}
                    alt="sun"
                    width={33}
                    height={33}
                  />
                  <Image
                    className="moon"
                    src={"/../images/moon.svg"}
                    alt="moon"
                    width={30}
                    height={30}
                  />
                </div>
            </label>
        </div>
  )
}
