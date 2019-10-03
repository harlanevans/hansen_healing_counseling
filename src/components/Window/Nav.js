import React from "react";
// import "../Global.css";
// import { Link } from 'react-router-dom';
import Logo from "../../assets/images/HLogoTransparent.png";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className="main-nav-window">
      <div className="nav-logo">
        <HashLink to="/#home" smooth>
          <img src={Logo} className='logo'/>
        </HashLink>
      </div>
      <div className="right-nav-items">
        <HashLink to="/#about" smooth className="nav-item">
          About
        </HashLink>
        <HashLink to="/#services" smooth className="nav-item">
          Services
        </HashLink>
        <HashLink to="/#contact" smooth className="nav-item">
          Contact
        </HashLink>
          <a
            href="https://hayley-hansen.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
             className="nav-client-portal"
          >
            Client Portal
          </a>
      </div>
    </div>
  );
};

export default Nav;
