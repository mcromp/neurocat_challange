import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
// import Header from "./shared_components/Header";

function Home() {
 return (
  <div style={{ padding: 20 }}>
   <h1>home</h1>
  </div>
 );
}

const _LINKS = {
 home: [
  { to: "/products", title: "Products" },
  { to: "/resources", title: "Resources" },
  { to: "/team", title: "Team" },
  { to: "/careers", title: "Careers" },
 ],
};

function App() {
 const [links, setLinks] = useState(_LINKS.home);
 return (
  <Router>
   <nav style={{ margin: 10 }}>
    <Link to="/">Home</Link>

    <Link to="/contact">Contact</Link>
   </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
   </Routes>
  </Router>
 );
}

export default App;
