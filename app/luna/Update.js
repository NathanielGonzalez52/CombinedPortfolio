import React from 'react';
import "./Update.css";
import Fade from "react-awesome-reveal";

export default function update() {
  return (

    <Fade triggerOnce={true} right duration={1200}>
      <form className="container">
        <h1 className="contact-wel">Never Miss an Update or Exclusive!</h1>
        <div className="email block">
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="block">
          <button className="sign-up">Sign Up</button>
        </div>
      </form>
    </Fade>
  );
}
