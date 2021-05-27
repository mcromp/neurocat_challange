import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
// import Header from "./shared_components/Header";
import Home from "./pages/Home";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
   </Routes>
  </Router>
 );
}

export default App;
