import React from "react";
import { MainTitle, SubTitle } from "./Styles";
import { Fade } from "react-reveal";

const LandingMobile = () => {
  return (
    <div className="background-image">
      <div className="landing-m-wrapper">
        <div className="landing-m-row">
          <Fade duration={2000}>
            <MainTitle>Hayley Hansen Healing</MainTitle>
          </Fade>
        </div>
        <div className="landing-m-row">
          <Fade duration={2000}>
            <div className="landing-m-sub-title">
              <SubTitle>
                For the high acheiving, active Millennial who is ready to take
                their{" "}
                <b className="landing-b">
                  stressed out, overthinking, anxious{" "}
                </b>
                lifestyle to{" "}
                <b className="landing-b">
                  living in the present: feeling empowered, centered, and calm.
                </b>
              </SubTitle>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LandingMobile;
