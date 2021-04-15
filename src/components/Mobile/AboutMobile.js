import React from "react";
import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
// import Hayley from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
// import { Grid } from "semantic-ui-react";

const AboutMobile = () => {
  return (
    <div className="about-mob-container">
      <Fade duration={2000} top>
        <div className="mob-title">
          <MobTitle>About Hayley</MobTitle>
        </div>
      </Fade>
      <Fade duration={2000} delay={500} left>
        <MobText className="mob-abt-text">
          <b className="landing-m-b-two">I'm Hayley. </b>Through natural and
          organic bodywork methods, I help high achieving Millennials with
          active lifestyles just like you overhaul your stressed out and chaotic
          bodily systems to grounded, embodied, authentic ones, so that you can
          live in the present and still achieve your goals with crazy amounts of
          intention, joy, and calm.
        </MobText>
      </Fade>
      <Fade duration={2000} bottom>
      <ButtonDivMob>
        <Link to="/about_hayley">
          <MobileButton>
            More About Hayley
          </MobileButton>
        </Link>
      </ButtonDivMob>
      </Fade>
    </div>
  );
};

export default AboutMobile;
