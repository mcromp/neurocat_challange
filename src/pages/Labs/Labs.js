import React from "react";
import "./style.css";
import Header from "../../shared_components/Header";

const labLinks = [
 { href: "#offerings", title: "Offerings" },
 { href: "#service", title: "Service Projects" },
 { href: "#nonprofit", title: "Non-Profit Projects" },
];

function Labs() {
 return (
  <div id="top" className="page home">
   <Header links={labLinks} />
  </div>
 );
}

export default Labs;
