import React from "react";
import { FooterText } from "./Global";

const Footer = () => {
  return (
    <footer className="footer-row">
        <div className="footer-column">
        <FooterText>Hayley Hansen, MC, LPC, RYT</FooterText>
        <FooterText>480-382-7552</FooterText>
        <a href="mailto: hayleyhansentherapy@gmail.com" className="footer-email">
            <FooterText>hayleyhansentherapy@gmail.com</FooterText>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
