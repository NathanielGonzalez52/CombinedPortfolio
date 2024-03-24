"use client";

import {React, useContext} from 'react';
import "./toggle.css"
import { ThemeContext } from './dark';

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
                  <img className= "sun" src="../images/sun.svg" alt="sun"></img>   
                  <img className= "moon" src="../images/moon.svg" alt="moon"></img>   
                </div>
            </label>
        </div>
  )
}
