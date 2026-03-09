import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#academic">Academic</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#project">Projects</Link>
        <Link to="/#contact">Contact</Link>
      </div>

      <div className="navbar__contact">
        <Link to="/contact-page" className="contact-btn">
          Contact Me
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
