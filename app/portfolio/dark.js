"use client";
import React, { useEffect, useState, createContext} from "react";
import "./dark.css";

const ThemeContext = createContext();

const Dark = (props) => {

    const [selectedTheme, setSelectedTheme] = useState("");

    const setDark = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    };

      useEffect (() => {

        const checkTheme = localStorage.getItem("selectedTheme");

        setSelectedTheme(checkTheme);
    
        if (checkTheme === "dark") {
            setDark();
        }

    }, [] );



    const toggleTheme = (e) => {
        if (e.target.checked) {
            setSelectedTheme("dark");
            setDark();

        }
        else {
            setSelectedTheme("light");
            setLightMode();
        }
    };


    return (
        <div>
            <ThemeContext.Provider value={{selectedTheme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};

export {Dark, ThemeContext};