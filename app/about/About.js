"use client";
import React from 'react'
import "./About.css";
import Fade from "react-awesome-reveal";
import Toggle from '../Toggle';

export default function About() {
  return (
    <>
    <Fade triggerOnce={true}>
        <div className="total-about">
            <Toggle />
            <div className="about txt">
                <h1 className="about-me head">About Me</h1>
                <div className="bio">
                    <div className="one txt">
                        Hello! My name is Nathaniel Gonzalez and I am currently an analytical chemist for LGM Pharmaceuticals with experience in  scientific examinations of sensitive materials, which require a meticulous and interpretive mindset. One aspect that I love about my job is the opportunity to constantly learn new techniques and concepts; a passion that is also reflected in my personal life. I am curious by nature and I love to explore many different activities in hopes of finding a new hobby.
                    </div>
                    <div className="two txt">
                        In fact, that is how I discovered my strong passion to program. On a whim, I took a 100 Days of Python course on Udemy and became obssessed. I fell in love with the unusual combination of creativity and logic required to build projects and have been passionate about programming ever since. While I started coding with Python, I moved on to a focus on web development using the following technologies: JavaScript, HTML5, CSS, and React. 
                    </div>
                    <div className="third txt">
                        What I lack in experience, I make up with enthusiasm, determination, and persistence. Given the chance, I know I can help you achieve the website of your dreams. Not only that, but as a thanks for your trust I will build your website at no cost to you! Right now, building a positive reputation with potential clients is much more important to me than any monetary gain. Still not convinced? Feel free to shoot me message through my <a href="/contact">Contact Page</a> or feel free to send me an Email at dev@thenathanielgonzalez.com! I would love the chance to speak with you.
                    </div>
                        <h2>Thank you!</h2>
                </div>
            </div>
        </div>
    </Fade>
    </>
  )
}

