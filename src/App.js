import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Why from "./components/whyTextSage/Why";
import Blog from "./components/BlogPage/Blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyTextSage" element={<Why />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
