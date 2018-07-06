import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (

    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Plan My Date</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar>
      <Navbar eventKey={1} href="#">
        Home
      </Navbar>
      <Navbar eventKey={2} href="#">
        Sign Up!
      </Navbar>
      <Navbar eventKey={3} href="#">
        Contact Us
      </Navbar>
    </Navbar>
  </Navbar>
)

export default Navbar;