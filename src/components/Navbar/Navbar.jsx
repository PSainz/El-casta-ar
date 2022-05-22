import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const src = "./images/logo-footer.png";
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <img className="log-nav" src={src} alt="logo-nav" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/nuestro-espacio">NUESTRO ESPACIO</a>
          </li>
          <li>
            <a href="/contact">CONTACTO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
