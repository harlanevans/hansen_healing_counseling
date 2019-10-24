import React from "react";
import { LandingTitle, LandingSubTitle } from "./Styles";
import { Fade } from "react-reveal";

const LandingMobile = () => {
  return (
    <div className="background-image">
      <div className="landing-m-wrapper">
        <div className="landing-m-row-title">
          <Fade duration={3000} delay={500}>
            <LandingTitle>Hayley Hansen Healing</LandingTitle>
          </Fade>
        </div>
        <div className="landing-m-row">
          <Fade duration={3000} delay={500}>
            <div className="landing-m-sub-title">
              <LandingSubTitle>
                Go from {""}
                <b className="landing-b">Choas {""}</b>
                to {""}
                <i>Calm. </i>
              </LandingSubTitle>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LandingMobile;
