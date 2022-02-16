import React from "react";
import Landing from "./Landing";
import LandingTextWindow from "./LandingTextWindow";
import About from "./About";
import Services from "./Services";
import FAQ from './FAQ'
import Contact from "./Contact";
import Loader from "./Loader";
// import { Fade } from 'react-reveal';

// import CarouselWindow from "./CarouselWindow";
import Quote from "./Quote";
// import { WhiteSpace } from "../Global";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Global.css";

class Window extends React.Component {
  state = { pageLoaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageLoaded: !this.state.pageLoaded });
    }, );
  }

  render() {
    return this.state.pageLoaded === false ? (
      <Loader />
    ) : (
      <div>
        <Nav />
        <div id="home">
          <Landing />
        </div>
        <LandingTextWindow />
        <div id="about">
          <About />
        </div>
        <Quote />
        <div id="services">
          <Services />
          </div>
          <div id='faq'>
            <FAQ />
          </div>
        <div id="contact">
          <Contact />
        </div>
        {/* <CarouselWindow /> */}
        {/* <WhiteSpace /> */}
        <Footer />
      </div>
    );
  }
}

export default Window;
