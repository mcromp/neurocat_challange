import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Labs from "./pages/Labs/Labs";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Labs" element={<Labs />} />
   </Routes>
  </Router>
 );
}

export default App;
