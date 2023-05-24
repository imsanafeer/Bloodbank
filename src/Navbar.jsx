import React from 'react'
import './Nav.css'
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
        <div className="navbar__container">
            <a href="/" id="navbar__logo">Blood Care</a>
            <div className="navbar__toggle">
                <span className="bar"></span> <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">  
              <li className="navbar__btn">
               <a href="/login" className="button" id="login">Log in</a>
              </li>
              <li className="navbar__btn">
                <a href="/signup" className="button" id="login">Sign Up</a>
              </li>
            </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
