import React from "react";
import "../Global.css";
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className="main-nav-window">
      <div className="nav-item">
        <HashLink to="/#home" smooth>
          <Icon name="leaf" className="leaf-icon-window" size="large" />
        </HashLink>
      </div>
      <div className="right-nav-items">
        <HashLink to="/#about" smooth className="nav-item">
          About
        </HashLink>
        <HashLink to="/#contact" smooth className="nav-item">
          Contact
        </HashLink>
        <HashLink to="/#services" smooth className="nav-item">
          Services
        </HashLink>
          <Link
            href="https://hayley-hansen.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
             className="nav-client-portal"
          >
            Client Portal
          </Link>
      </div>
    </div>
  );
};

export default Nav;
