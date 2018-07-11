import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

 //Depending on the current path, this component sets the "active" class on the appropriate navigation link item
 const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Date Planner
     </Link>
     <div>
      <ul className="navbar-nav">
         <li
           className={
             window.location.pathname === "/" ||
             window.location.pathname === "/home"
               ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/datepg"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/datepg" className="nav-link">
            Events
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/signup"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/signup" className="nav-link">
            Restaurants
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
