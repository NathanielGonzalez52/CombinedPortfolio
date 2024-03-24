import React from 'react'
import "./footer.css";
import DarkMode from "./dark.js";

export default function footer() {

  const date = new Date();

  return (
    <>
    <div className = "footer">
      <div className = "github">
          <a href="https://github.com/NathanielGonzalez52"><i class="fa-brands fa-github"></i></a>
      </div>

      <p className="copyright">© {date.getFullYear()} DevelopWithNathaniel</p>

    </div>
    </>
  )
}