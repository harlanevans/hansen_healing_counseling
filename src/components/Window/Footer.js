import React from "react";
import { FooterText } from "./Global";
import Insta from "../../assets/icons/Insta.png";

const Footer = () => {
  return (
    <footer className="footer-window">
      <div className="footer-row">
        <div className="footer-column">
          <div className="footer-row-logos">
            <a
              href="https://www.instagram.com/hayleyhansenhealing/?hl=en"
              target="_blank"
              className="footer-insta"
            ></a>

            <a
              href="https://www.facebook.com/Hayleyhansenhealing/"
              target="_blank"
              className="footer-fb"
            />
          </div>

          <FooterText>Hayley Hansen, MC, RYT</FooterText>
          <FooterText>480-382-7552</FooterText>
          <a
            href="mailto: hayleyhansentherapy@gmail.com"
            className="footer-email"
          >
            <FooterText>hayleyhansentherapy@gmail.com</FooterText>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
