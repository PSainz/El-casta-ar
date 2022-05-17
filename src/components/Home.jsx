import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div>
        <ul className="links">
          <li>
            <Link to="/nuestro-espacio" className="spots">
              nuestro-espacio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="create-spot">
              contact
            </Link>
          </li>
          <li>
            <Link to="/" className="create-spot">
              home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
