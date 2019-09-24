import React from "react";
// import { WhiteBGGlobal } from "../Global";
import Image from "../assets/images/HMeditate.jpg";
import { Fade } from "react-reveal";
import { SubTitleAbout, AboutText } from "../Global";

const About = () => {
  return (
    <div className="about-padding">
      <div className="about-header">
        <Fade>
          <SubTitleAbout>About Hayley Hansen</SubTitleAbout>
        </Fade>
        <Fade>
          <div className="about-row">
            <Fade left duration={3000}>
              <div className="about-col" id="box-left">
                <Fade left delay={1000} duration={3000}>
                  <img
                    src={Image}
                    className="about-image"
                    alt="hayley-hansen"
                    id="inner-box"
                  />
                </Fade>
              </div>
            </Fade>
            <Fade right duration={3000}>
              <div
                className="about-col"
                style={{ padding: "0em 5em" }}
                id="box-right"
              >
            <Fade right delay={1000} duration={3000}>
                <AboutText id="inner-box">
                  I'm Hayley. Through natural and organic bodywork methods, I
                  help high achieving Millennials with active lifestyles just
                  like you overhaul your stressed out and chaotic bodily systems
                  to grounded, embodied, authentic ones, so that you can live in
                  the present and still achieve your goals with crazy amounts of
                  intention, joy, and calm.
                </AboutText>
            </Fade>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
      <Fade bottom duration={3000}>
        <div className="about-button">
          <button>More about Hayley</button>
        </div>
      </Fade>
    </div>
  );
};

export default About;
