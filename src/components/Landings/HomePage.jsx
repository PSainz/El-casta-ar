import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PrincipalImage from "../PrincipalImage/PrincipalImage";
import MidPageInfo from "../MidPageInfo/MidPageInfo";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
import EventTypes from "../EventTypes/EventTypes";
import Prefooter from "../Prefooter/Prefooter";

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <PrincipalImage />
      <MidPageInfo />
      <GeneralInfo />
      <EventTypes />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default HomePage;
