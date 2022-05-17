import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";





const App = () => {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nuestro-espacio" element={<Home />}></Route>
          <Route exact path="/contact" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;