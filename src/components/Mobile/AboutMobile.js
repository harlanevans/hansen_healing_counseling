import React from "react";
import { SubTitleAbout, AboutText } from "./Styles";
import Hayley from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
// import { Grid } from "semantic-ui-react";

const AboutMobile = () => {
  return (
    <div className="about-container">
      <div className="about-background-one">
        <SubTitleAbout>About Hayley</SubTitleAbout>
        <img src={Hayley} alt="Hayley" className="hayley-image" />
      </div>
      <div className="about-background-two">
        <AboutText>
          I'm Hayley. Through natural and organic bodywork methods, I help high
          achieving Millennials with active lifestyles just like you overhaul
          your stressed out and chaotic bodily systems to grounded, embodied,
          authentic ones, so that you can live in the present and still achieve
          your goals with crazy amounts of intention, joy, and calm.
        </AboutText>
      </div>
      <div className="about-button-container">
        <Link to="/about_hayley">
          <button>More About Hayley</button>
        </Link>
      </div>
      {/* <button>Need More?</button> */}
    </div>
  );
};

export default AboutMobile;
