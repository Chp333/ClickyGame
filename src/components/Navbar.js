import React from "react";
import "../styles/Navbar.css";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav className="navbar"> {props.children} </nav>
);

export default Navbar;
