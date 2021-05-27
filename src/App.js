import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import AidKit from "./pages/AidKit";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/aidkit" element={<AidKit />} />
   </Routes>
  </Router>
 );
}

export default App;
