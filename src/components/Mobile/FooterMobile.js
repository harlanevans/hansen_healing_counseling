import React from "react";
import { FooterText } from "./Styles";
// import { Grid } from "semantic-ui-react";

const FooterMobile = () => {
  return (
    <footer className="mobile-footer">
      <div className="footer-wrapper">
        <FooterText>Hayley Hansen, MC, LPC, RYT</FooterText>
        <a href="tel: 480-382-7552">
          <FooterText>480-382-7552</FooterText>
        </a>
        <a href="mailto: hayleyhansentherapy@gmail.com">
          <FooterText>hayleyhansentherapy@gmail.com</FooterText>
        </a>
      </div>
    </footer>
  );
};

export default FooterMobile;
