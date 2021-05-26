import React from "react";
import headLogo from "../assets/head_logo.png";
import { Link } from "react-router-dom";

const Header = ({ links }) => {
 return (
  <header className="nav">
   <Link to="/">
    <img src={headLogo} alt="Neurocat Logo" />
   </Link>
   <nav>
    {links.map((link) => {
     if (link.href) {
      return <Link to={link.to}>{link.title}</Link>;
     }
     return (
      <a href={link.href} alt={`link to ${link.title}`}>
       {link.title}
      </a>
     );
    })}
   </nav>
  </header>
 );
};

export default Header;
