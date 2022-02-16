import React from "react";
import { Fade } from "react-reveal";
import { Text } from "./Global";

const LandingTextWindow = () => {
  return (
    <div className="landing-text-container">
      <Fade duration={3000}>
        <Text>
          <div className="landing-b-text-noun">
            <b className="landing-b-text">vitality (n)</b>
          </div>
          <div style={{ marginLeft: '2em' }}>
            exuberant physical strength or mental vigor: a person of great vitality.
            capacity for survival or for the continuation of a meaningful or purposeful existence:
            power to live or grow: <a href="https://www.dictionary.com/browse/vital-force" target="_blank" rel="noopener noreferrer">vital force</a> or principle.
          </div>
          <div className="landing-b-text-noun-two">
            <b className="landing-b-text">vital force (n)</b>
          </div>
          <div style={{ marginLeft: '4em' }}>
            the force that animates and perpetuates living beings and organisms.
          </div>
            <div style={{paddingTop: '2em'}}>
              Together, let's tap into your vital force and allow for the possibility of healing into vitality.
            </div>
        </Text>
      </Fade>
    </div>
  );
};

export default LandingTextWindow;
