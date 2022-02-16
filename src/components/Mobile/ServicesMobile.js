import React from "react";
import { MobTitle, MobileButton } from "./Styles";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const ServicesMobile = () => {
  return (
      <div className="services-m-container">
    <Fade duration={2000}>
        <Fade duration={2000} top>
          <div className="mob-title">
            <MobTitle>Services</MobTitle>
          </div>
        </Fade>
        <div className="s-button-cont">
          <Fade duration={2000} delay={500}>
            <Link to="/somatic-touch-bodyworker">
              <MobileButton className="service-button">
                Somatic Touch BodyWorker
              </MobileButton>
            </Link>
            <Link to="/resources">
              <MobileButton className="service-button">
                Rescources
              </MobileButton>
            </Link>
          </Fade>
        </div>
    </Fade>
      </div>
  );
};

export default ServicesMobile;
