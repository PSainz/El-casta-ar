import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import Map from "../Gmaps/Map";
import Preefoter from "../Prefooter/Prefooter";
import Footer from "../Footer/Footer";
import "./Landings.scss";

function ContactPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="full-wrapper-contact-page">
        <div className="wrapper-contact-page">
          <div className="flex">
            <Form />
            <div className="width"></div>
            <Map />
          </div>
        </div>
      </div>
      <Preefoter />
      <Footer />
    </div>
  );
}

export default ContactPage;
