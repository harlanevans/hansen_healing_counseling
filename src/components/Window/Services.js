import React from "react";
import { Link } from "react-router-dom";
import { CompTitle, GlobalButton } from "./Global";
import SImage from "../../assets/images/LandingCactus.jpg";
import { Fade } from "react-reveal";


class Services extends React.Component {
  render() {
    return (
      <div className="service-wrapper">
        <Fade duration={2000} top>
          <div className="service-title">
            <CompTitle>Services</CompTitle>
          </div>
        </Fade>
        <div className="service-row">
          <Fade duration={2000} top>
            <div className="service-col" id="serv-box-one">
              <Fade duration={2000} delay={500} top>
                <Link to="/somatic-touch-bodyworker">
                  <GlobalButton className="service-button">
                    Somatic Touch BodyWorker
                  </GlobalButton>
                </Link>
              </Fade>
              <Fade duration={2000} delay={500} top>
                <Link to="/resources">
                  <GlobalButton className="service-button">
                    Resources
                  </GlobalButton>
                </Link>
              </Fade>
            </div>
          </Fade>
          <Fade bottom duration={2000}>
            <div className="service-col" id="serv-box-two">
              <Fade bottom delay={500} duration={2000}>
                <img src={SImage} className="service-image" alt="services" />
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Services;
