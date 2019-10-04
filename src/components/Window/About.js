import React from "react";
// import { WhiteBGGlobal } from "../Global";
import Image from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { CompTitle, SmallerText, GlobalButton, ButtonDiv } from "./Global";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <Fade duration={2000} top>
            <CompTitle>About Hayley Hansen</CompTitle>
          </Fade>
        </div>
        <div className="about-row">
          <Fade left duration={2000}>
            <div className="about-col-one">
          <Fade left duration={2000} delay={750}>
              <div className="abt-img-cont">
                <img
                  src={Image}
                  className="about-image"
                  alt="hayley-hansen"
                  id="inner-box"
                />
              </div>
          </Fade>
            </div>
          </Fade>

          <Fade right duration={2000}>
            <div className="about-col-two">
          <Fade right duration={2000} delay={750}>
              <div className="abt-txt-cont">
                <SmallerText>
                  <b className="landing-b-text">I'm Hayley. </b>Through natural
                  and organic bodywork methods, I help high achieving
                  Millennials with active lifestyles just like you overhaul your
                  stressed out and chaotic bodily systems to grounded, embodied,
                  authentic ones, so that you can live in the present and still
                  achieve your goals with crazy amounts of intention, joy, and
                  calm.
                </SmallerText>
              </div>
          </Fade>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom duration={2000}>
      <ButtonDiv>
        <Link to="/about_hayley">
          <GlobalButton>More About Hayley</GlobalButton>
        </Link>
      </ButtonDiv>
      </Fade>
    </div>
  );
};

export default About;
