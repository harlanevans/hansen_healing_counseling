import React from "react";
import { SubTitleAbout, AboutText } from "./Styles";
import Hayley from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
// import { Grid } from "semantic-ui-react";

const AboutMobile = () => {
  return (
    <div className="about-container">
      <Fade duration={2000} left>
        <div className="about-background-one">
          <SubTitleAbout>About Hayley</SubTitleAbout>
          <Fade duration={2000} delay={500} right>
            <img src={Hayley} alt="Hayley" className="hayley-image" />
          </Fade>
        </div>
      </Fade>
      <Fade duration={2000} right>
        <div className="about-background-two">
            <AboutText>
          <Fade duration={2000} delay={500} left>
              I'm Hayley. Through natural and organic bodywork methods, I help
              high achieving Millennials with active lifestyles just like you
              overhaul your stressed out and chaotic bodily systems to grounded,
              embodied, authentic ones, so that you can live in the present and
              still achieve your goals with crazy amounts of intention, joy, and
              calm.
          </Fade>
            </AboutText>
        </div>
      </Fade>
      <div className="about-button-container">
        <Link to="/about_hayley">
          <button className='about-m-button'>More About Hayley</button>
        </Link>
      </div>
      {/* <button>Need More?</button> */}
    </div>
  );
};

export default AboutMobile;
