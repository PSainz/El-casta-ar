import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import VideoRow from "../VideoRow/VideoRow";
import FirstCarouselRow from "../FirstCarouselRow/FirstCarouselRow";
import SecondCarouselRow from "../SecondCarouselRow/SecondCarouselRow";
import Prefooter from "../Prefooter/Prefooter";

function OurSpacePage() {
  return (
    <div className="container">
      <Navbar />
      <VideoRow />
      <FirstCarouselRow />
      <SecondCarouselRow />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default OurSpacePage;
