import React from "react";
import { FooterText } from "./Styles";
import Insta from "../../assets/icons/Insta.png";
import FB from "../../assets/icons/FB.png";
// import { Grid } from "semantic-ui-react";

const FooterMobile = () => {
  return (
    <footer className="mobile-footer">
      <div className="footer-mob-row">
        <a
          href="https://www.instagram.com/hayleyhansenhealing/?hl=en"
          target="_blank"
          className="footer-mob-insta"
        >
          {/* <img src={Insta} className="logos-mob" /> */}
        </a>

        <a
          href="https://www.facebook.com/Hayleyhansenhealing/"
          target="_blank"
          className="footer-mob-fb"
        >
          {/* <img src={FB} className="logos-mob" /> */}
        </a>
      </div>
      <div className="footer-mob-wrapper">
        <FooterText>Hayley Hansen, MC, RYT</FooterText>
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
