import React from "react";
import headLogo from "../../assets/head_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./style.css";

const Header = ({ links }) => {
 return (
  <header className="header">
   <nav className="nav">
    <Link className="logo" to="/">
     <img className="logo-img" src={headLogo} alt="Neurocat Logo" />
    </Link>
    <div className="nav-links">
     {links.map((link) => {
      if (link.href) {
       return (
        <HashLink
         key={link.title}
         className="nav-link"
         to={`${link.href}`}
         alt={`link to ${link.title}`}
        >
         {link.title}
        </HashLink>
       );
      }
      return (
       <Link key={link.title} className="nav-link" to={link.to}>
        {link.title}
       </Link>
      );
     })}
    </div>
   </nav>
  </header>
 );
};

export default Header;
