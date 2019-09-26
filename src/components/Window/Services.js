import React from "react";
import { NavLink } from "react-router-dom";
import { SubTitle } from "./Global";
import SImage from "../../assets/images/HYoga.jpg";
import { Fade } from 'react-reveal';

class Services extends React.Component {
  render() {
    return (
      <div className="service-wrapper">
      <div className='service-title'>
        <SubTitle>Services</SubTitle>
      </div>
        <div className="service-row">
        <Fade duration={2000} top>
          <div className="service-col" id="serv-box-one">
        <Fade duration={2000} delay={500}top>
            <NavLink to="/organic-healing-yoga-group" className="service-link-window">
              <button className="service-button">Organic Healing Yoga Group</button>
            </NavLink>
            <NavLink to="/emdr">
              <button className="service-button">EMDR</button>
            </NavLink>
        </Fade>
          </div>
        </Fade>
        <Fade bottom duration={2000}>
          <div className="service-col" id="serv-box-two">
        <Fade bottom delay={500} duration={2000}>
            <img src={SImage} className="service-image" alt="hayley-yoga" />
        </Fade>
          </div>
        </Fade>
        </div>
      </div>
    );
  }
}

export default Services;
