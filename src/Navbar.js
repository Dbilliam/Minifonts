import React from "react";
import { NavLink } from "react-router-dom";


function Navbar({ sideDrawerToggle }) {
  return (
    <header>
      <div className="mini-fonts-title" >
      <NavLink to="/">
        <div className="mini-logo"></div>
        </NavLink>
        <h1>&nbsp;Fonts</h1>
      </div>
      <nav>
        <div className="fa fa-navicon" onClick={sideDrawerToggle}></div>
        <ul >
          <li  className="nav-link nav-link-grow-up">
            <NavLink
           
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li  className="nav-link nav-link-grow-up">
            <NavLink
           
              to="/docs"
            >
              Documentation
            </NavLink>
          </li>
          <li  className="nav-link nav-link-grow-up">
            <NavLink
           
              to="/trending"
            >
              Trending
            </NavLink>
          </li>
          <li  className="nav-link nav-link-grow-up">
            <NavLink
              to="/contact"
            >
                Contact
            </NavLink>
          </li>
          <li className="nav-link nav-link-grow-up">
            <NavLink
              to="/disclaimer"
            >
              Disclaimer
            </NavLink>
          </li>
          <li className="nav-link nav-link-grow-up">
            <NavLink
              to="/privacy-policy"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li className="nav-link nav-link-grow-up">
            <NavLink
              to="/donation"
            >
               Donation
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
