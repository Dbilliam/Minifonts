import React from "react";
import { NavLink } from "react-router-dom";
function SideDrawer({ isSideDrawerOpen }) {
  return (
    <div
      className="side-drawer"
      style={isSideDrawerOpen ? { transform: "translateX(0)" } : null} // slide drawer to the open position
    >
      <div className="mini-fonts-title">
        <div className="mini-logo"></div>
        <h1>&nbsp;Fonts</h1>
      </div>
      <hr />
      <ul>
        <li className="sideDrawer">
          <NavLink
            to="/about"
          >
           
            About
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/docs"
          >
           
           Documentation
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/trending"
          >
            
            Trending
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/contact"
          >
           
            Contact
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/disclaimer">
            
            Disclaimer
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/privacy-policy">
          
            Privacy Policy
          </NavLink>
        </li>
        <li className="sideDrawer">
          <NavLink
            to="/donation"
          >
          
            Donation
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SideDrawer;
