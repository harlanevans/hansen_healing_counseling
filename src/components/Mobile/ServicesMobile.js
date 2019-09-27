import React from "react";
import HYoga from "../../assets/images/HYoga.jpg";
import { SubTitleAbout } from "./Styles";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const ServicesMobile = () => {
  return (
    <div className="services-m-container">
      <div className="s-mob-bg-one">
        <SubTitleAbout>Services</SubTitleAbout>
        <img src={HYoga} className='services-m-img'/>
      </div>
      <div className="s-mob-bg-two">
        <div className="button-wrapper">
          <NavLink to="/emdr" className="service-link">
            EMDR
          </NavLink>
          <NavLink to="/organic-healing-yoga-group" className="service-link">
            Organic Healing Yoga Group
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
