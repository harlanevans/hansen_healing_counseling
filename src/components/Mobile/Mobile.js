import React from "react";
import NavMobile from "./NavMobile";
import NavModal from "./NavModal";
import LandingMobile from "./LandingMobile";
import LandingText from "./LandingText";
import AboutMobile from "./AboutMobile";
import ContactMobile from "./ContactMobile";
import ServicesMobile from "./ServicesMobile";
import "./Mobile.css";
import CarouselMobile from "./CarouselMobile";
import FooterMobile from "./FooterMobile";
import { Fade } from "react-reveal";
// import { WhiteBGGlobal } from './Styles';
import ScrollToTop from "../../ScrollToTop";

class Mobile extends React.Component {
    state = { showModal: false };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    console.log("Toggled")
  };

  render() {
    return (
      <div>
        <div className='fixed'>
        <NavMobile toggleModal={this.toggleModal}/>
        <NavModal showModal={this.state.showModal} toggleModal={this.toggleModal}/>
        </div>
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
    );
  }
}

export default Mobile;
