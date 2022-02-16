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
                    We are here to feel really good in our bodies, to feel really safe and connected in relationship. We are here to feel alive! Your body is designed to explore Earth and experience all the wonder and bliss.
                    Maybe post pandemic you are feeling sick or sad. Maybe it started before that.
                    Maybe you have survived an injury, of the body or the heart.
                    I don't know what you are doing to survive, but you have done a wonderful job keeping yourself safe. Everyone is doing the best they can, and you are doing a great job.
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
