import React from "react";
import headLogo from "../../assets/head_logo.png";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ links }) => {
 return (
  <header className="header">
   <nav className="nav">
    <Link className="logo" to="/">
     <img className="logo-img" src={headLogo} alt="Neurocat Logo" />
    </Link>
    {links.map((link) => {
     if (link.href) {
      return (
       <a
        key={link.title}
        className="nav-link"
        href={`${link.href}`}
        alt={`link to ${link.title}`}
       >
        {link.title}
       </a>
      );
     }
     return (
      <Link key={link.title} className="nav-link" to={link.to}>
       {link.title}
      </Link>
     );
    })}
   </nav>
  </header>
 );
};

export default Header;
