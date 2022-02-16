import React from "react";
import { Fade } from "react-reveal";
import { MobileLandingText } from "./Styles";

const LandingText = () => {
  return (
    <div className="landing-title-container-mobile">
      <div className="landing-m-text">
        <Fade duration={3000} delay={500}>
          <MobileLandingText>
            <div className="landing-b-m-text-noun">
              <b className="landing-m-b-two">vitality (n)</b>
            </div>
            <div style={{ marginLeft: '2em' }}>
              exuberant physical strength or mental vigor: a person of great vitality.
              capacity for survival or for the continuation of a meaningful or purposeful existence:
              power to live or grow: <a href="https://www.dictionary.com/browse/vital-force" target="_blank" rel="noopener noreferrer">vital force</a> or principle.
            </div>
            <div className="landing-b-m-text-noun-two">
              <b className="landing-m-b-two">vital force (n)</b>
            </div>
            <div style={{ marginLeft: '4em' }}>
              the force that animates and perpetuates living beings and organisms.
            </div>
            <div style={{ paddingTop: '2em' }}>
              Together, let's tap into your vital force and allow for the possibility of healing into vitality.
            </div>
          </MobileLandingText>
        </Fade>
      </div>
    </div>
  );
};

export default LandingText;
