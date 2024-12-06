// Henter.js
import React from "react";
import { Link } from "react-router-dom";

function Henter() {
  return (
    <div className="App">
      <div className="home-container">
        <img src="/download (1).jpg" alt="Rajiv Gandhi University of Knowledge Technologies Logo" className="App-logo" />
        <h1 className="white" style={{ color: "white" }}>Rajiv Gandhi University of Knowledge Technologies</h1>
        <h2 className="highlight">Student Placement Analysis</h2>
        <div>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="login-btn">Signup</Link>
        </div>
    
      </div>
    </div>
  );
}

export default Henter;
