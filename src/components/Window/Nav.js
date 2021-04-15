import React from "react";
// import "../Global.css";
// import { Link } from 'react-router-dom';
// import Logo from "../../assets/icons/HLogoTransparent.png";
import LogoBlack from "../../assets/icons/HHHBlackLogo.png";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className="main-nav-window">
      <div className="nav-logo">
        <HashLink to="/#home" smooth style={{padding: '0em', margin: '0em', height: '100%', width: '100%'}}>
          <img src={LogoBlack} className='logo' alt='hlogo' />
        </HashLink>
      </div>
      <div className="right-nav-items">
      <div className='center-nav'>
        <HashLink to="/#about" smooth className="nav-item">
          About
        </HashLink>
      </div>
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
