import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import Map from "../Gmaps/Map";
import "./Landings.scss";

function ContactPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="full-wrapper-contact-page">
        <div className="wrapper-contact-page">
          <Form />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
