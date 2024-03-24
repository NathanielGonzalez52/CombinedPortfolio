import React from 'react'
import "./Footer.css"

export default function footer() {
  return (
    <>
    <div className = "foot">
      <div className="hours info">
      <h5 className = "header-f">Hours</h5>
          <p className="hours theme-f">Mon-Fri: 8AM -8PM</p>
          <p className="hours theme-f">Sat: 7AM - 8PM</p>
          <p className="hours theme-f">Sun: 7AM - 5PM</p>
      </div>

      <div className="location info">
      <h5 className = "header-f">Come See Us!</h5>
          <p className="address theme-f">9213 Valley View St</p>
          <p className="address theme-f">Cyress, CA, 90630</p>
          <p className="address theme-f">(714) 828-8650</p>
      </div>
  </div>
    <div className="socials-f info">
      <div className="social-pic">
        <a className = "icon-f" href="https://www.facebook.com/pages/category/Fast-Food-Restaurant/Senor-Taco-165819833562758/"><i class="fa-brands fa-facebook fa-2xl"></i></a>
        <a className="icon-f" href="https://www.yelp.com/biz/se%C3%B1or-taco-cypress-2"><i class="fa-brands fa-yelp fa-2xl"></i></a>
      </div>
      <p className="copyright theme-f"> © {new Date().getFullYear()} Senor Taco</p>
    
    </div>
</>
  )
}
