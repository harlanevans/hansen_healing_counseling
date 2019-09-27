import React from "react";
import HYoga from "../../assets/images/HYoga.jpg";
import { SubTitleAbout } from "./Styles";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const ServicesMobile = () => {
  return (
    <div className="services-m-container">
    <Fade duration={2000} left>
      <div className="s-mob-bg-one">
        <SubTitleAbout>Services</SubTitleAbout>
    <Fade duration={2000} delay={500} right>
        <img src={HYoga} className='services-m-img'/>
    </Fade>
      </div>
    </Fade>
    <Fade duration={2000} right>
      <div className="s-mob-bg-two">
        <div className="button-wrapper">
    <Fade duration={2000} delay={500} left>
          <NavLink to="/emdr" className="service-link">
            EMDR
          </NavLink>
          <NavLink to="/organic-healing-yoga-group" className="service-link">
            Organic Healing Yoga Group
          </NavLink>
    </Fade>
        </div>
      </div>
    </Fade>
    </div>
  );
};

export default ServicesMobile;
