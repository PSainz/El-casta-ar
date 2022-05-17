import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Landings/HomePage.jsx";
import ContactPage from "./components/Landings/ContactPage.jsx";






const App = () => {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          {/* <Route exact path="/nuestro-espacio" element={<HomePage />}></Route> */}
          <Route exact path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;