import React from "react";
import { MobTitle, MobileButton } from "./Styles";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const ServicesMobile = () => {
  return (
    <Fade duration={2000}>

    <div className="services-m-container">
      <Fade duration={2000} top>
        <div className="mob-title">
          <MobTitle>Services</MobTitle>
        </div>
      </Fade>
        <div className="s-button-cont">
          <Fade duration={2000} delay={500} left>
              <Link to="/emdr" style={{ color: "black" }}>
            <MobileButton className="s-mob-button">
                EMDR
            </MobileButton>
              </Link>
          </Fade>
          <Fade duration={2000} delay={500} right>
            <Link to="/organic-healing-yoga-group">
              <MobileButton className="s-mob-button">
                Organic Healing Yoga Group
              </MobileButton>
            </Link>
          </Fade>
        </div>
    </div>
    </Fade>
  );
};

export default ServicesMobile;
