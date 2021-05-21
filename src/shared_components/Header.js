import React from "react";
import headLogo from "../assets/head_logo.png";

const Header = ({ links }) => {
 return (
  <header className="nav">
   <a href="/">
    <img src={headLogo} alt="Neurocat Logo" />
   </a>
   <nav>
    {links.map((item) => (
     <NavLink key={item.title} item={item} />
    ))}
   </nav>
  </header>
 );
};

const NavLink = ({ item }) => (
 <a href={item.address} alt={`link to ${item.title}`}>
  {item.title}
 </a>
);

export default Header;
