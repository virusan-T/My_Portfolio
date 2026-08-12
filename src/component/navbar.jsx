import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "/#about" },
    { label: "Education", to: "/#education" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/#project" },
    
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link to="/#home" className="nav-brand" aria-label="Virusan Thavanathan home">
        VT
      </Link>
      <div className="nav-center">
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
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
