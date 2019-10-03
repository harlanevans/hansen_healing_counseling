import React from "react";
// import { WhiteBGGlobal } from "../Global";
import Image from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { CompTitle, Text, GlobalButton, ButtonDiv } from "./Global";

const About = () => {
  return (
    <div className="about-padding">
      <div className="about-wrapper">
        <Fade duration={2000} top>
          <div className="about-header">
            <CompTitle>About Hayley Hansen</CompTitle>
          </div>
        </Fade>
        <div className="about-row">
          <Fade left duration={2000}>
            <div className="about-col" id="box-left">
              <Fade left delay={500} duration={2000}>
                <img
                  src={Image}
                  className="about-image"
                  alt="hayley-hansen"
                  id="inner-box"
                />
              </Fade>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div
              className="about-col"
              style={{ padding: "0em 5em" }}
              id="box-right"
            >
              <Fade right delay={500} duration={2000}>
                <Text id="inner-box">
                  <b className="landing-b-text">I'm Hayley. </b>Through natural
                  and organic bodywork methods, I help high achieving
                  Millennials with active lifestyles just like you overhaul your
                  stressed out and chaotic bodily systems to grounded, embodied,
                  authentic ones, so that you can live in the present and still
                  achieve your goals with crazy amounts of intention, joy, and
                  calm.
                </Text>
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
