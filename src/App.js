// import './App.css'



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Henter from "./components/Henter";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import PredictionResult from './components/PredictionResult';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Henter/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/prediction-result" element={<PredictionResult />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
