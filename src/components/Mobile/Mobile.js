import React from "react";
import NavMobile from "./NavMobile";
import NavModal from "./NavModal";
import LandingMobile from "./LandingMobile";
import LandingText from "./LandingText";
import AboutMobile from "./AboutMobile";
import ContactMobile from "./ContactMobile";
import ServicesMobile from "./ServicesMobile";
import QuoteMobile from "./QuoteMobile";
import FooterMobile from "./FooterMobile";
import "./Mobile.css";
// import CarouselMobile from "./CarouselMobile";
// import { Fade } from "react-reveal";
// import { WhiteBGGlobal } from './Styles';
import ScrollToTop from "../../ScrollToTop";
import Loader from "../Window/Loader";

class Mobile extends React.Component {
  state = { showModal: false, pageLoaded: false };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    // console.log("Toggled")
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageLoaded: !this.state.pageLoaded });
    }, 4000);
  }

  render() {
    return this.state.pageLoaded === false ? (
      <Loader />
    ) : (
      <div>
        <NavMobile toggleModal={this.toggleModal} style={styles.fixed}  />
        <NavModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
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
        <QuoteMobile />
        {/* <CarouselMobile /> */}
        <ScrollToTop>
          <div id="services">
            <ServicesMobile />
          </div>
        </ScrollToTop>
        <ScrollToTop>
          <div id="contact">
            <ContactMobile />
          </div>
        </ScrollToTop>
        <FooterMobile />
      </div>
    );
  }
}

export default Mobile;


const styles = {
  fixed: {
    display: 'fixed',
    zIndex: '10000',
    backgroundColor: 'red'

  }
}
