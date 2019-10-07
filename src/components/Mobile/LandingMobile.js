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
                For the high acheiving, active Millennial who is ready to take
                their{" "}
                <b className="landing-b">
                  stressed out, overthinking, anxious{" "}
                </b>
                lifestyle to{" "}
                <b className="landing-b">
                  living in the present: feeling empowered, centered, and calm.
                </b>
              </LandingSubTitle>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LandingMobile;
