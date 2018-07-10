import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// const Navbar = () => (

//     <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#home">Plan My Date</a>
//       </Navbar.Brand>
//     </Navbar.Header>
//     <Navbar>
//       <Navbar eventKey={1} href="#">
//         Home
//       </Navbar>
//       <Navbar eventKey={2} href="#">
//         Sign Up!
//       </Navbar>
//       <Navbar eventKey={3} href="#">
//         Contact Us
//       </Navbar>
//     </Navbar>
//   </Navbar>
// );

// export default Navbar;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      App Name
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
