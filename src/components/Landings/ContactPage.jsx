import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "../Form/Form";

function ContactPage() {
  return (
    <div className="container">
      CONTACT PAGE
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
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;
