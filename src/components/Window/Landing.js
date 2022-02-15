import React from "react";
// import { Grid } from "semantic-ui-react";
import { LandingTitleText, LandingTitle } from "./Global";
import { Fade } from "react-reveal";
import "./Global.css";
// import { HashLink } from "react-router-hash-link";

class Landing extends React.Component {
  render() {
    return (
          <Fade duration={2000}>
      <div className="background-image-window">
        <div className="landing-empty-space"></div>
        <div className="landing-text-wrapper">
          <Fade duration={3000} delay={500}>
            <div className="landing-title-row">
              <LandingTitle>Hayley Hansen Healing</LandingTitle>
            </div>
          </Fade>
          <Fade duration={3000} delay={1000}>
            <div className="landing-title-container">
              <LandingTitleText>
              Deep healing to reach your highest potential
              </LandingTitleText>
            </div>
          </Fade>
        </div>
      </div>
          </Fade>
    );
  }
}

export default Landing;
