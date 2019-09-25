import React from "react";
// import { Grid } from "semantic-ui-react";
import { LandingTitle, LandingTitleTwo } from "../Global";
import { Fade } from "react-reveal";
import "../Global.css";
// import { HashLink } from "react-router-hash-link";

class Landing extends React.Component {
  render() {
    return (
      <div className="background-image-window">
        <div className="landing-wrapper-window">
        <div className='landing-title-row'>
          <LandingTitleTwo>
            Hayley Hansen Healing
          </LandingTitleTwo>
        </div>
          <div className="landing-title-container">
            <Fade duration={2000}>
              <LandingTitle>
                For the high acheiving, active Millennial who is ready to take
                their{" "}
                <b className="landing-b">
                  stressed out, overthinking, anxious{" "}
                </b>
                lifestyle to{" "}
                <b className="landing-b">
                  living in the present:{" "}
                    feeling empowered, centered, and calm.
                </b>
              </LandingTitle>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
