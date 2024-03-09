import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Why from "./components/whyTextSage/Why";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyTextSage" element={<Why />} />
      </Routes>
    </Router>
  );
}

export default App;
