import React from "react";
import NavMobile from "./NavMobile";
import LandingMobile from "./LandingMobile";
import LandingText from './LandingText';
import AboutMobile from "./AboutMobile";
import ContactMobile from "./ContactMobile";
import ServicesMobile from "./ServicesMobile";
import "./Mobile.css";
import CarouselMobile from "./CarouselMobile";
import FooterMobile from "./FooterMobile";
import { Fade } from "react-reveal";
// import { WhiteBGGlobal } from './Styles';
import ScrollToTop from "../../ScrollToTop";

const Mobile = () => {
  return (
    // <Fade duration={2000}>
    <div>
        <NavMobile />
        <ScrollToTop>
          <div id="home">
            <LandingMobile />
          </div>
          <LandingText />
        </ScrollToTop>
        {/* <WhiteBGGlobal /> */}
        <ScrollToTop>
          <div id="about">
            <AboutMobile />
          </div>
        </ScrollToTop>
        <ScrollToTop>
          <div id="contact">
            <ContactMobile />
          </div>
        </ScrollToTop>
        <CarouselMobile />
        <ScrollToTop>
          <div id="services">
            <ServicesMobile />
          </div>
        </ScrollToTop>
        <FooterMobile />
        </div>
    // </Fade>
  );
};

export default Mobile;
