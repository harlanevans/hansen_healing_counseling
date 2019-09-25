import React from "react";
import Landing from "./Landing";
import LandingTextWindow from "./LandingTextWindow";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
// import CarouselWindow from "./CarouselWindow";
import Quote from './Quote';
// import { WhiteSpace } from "../Global";
import Footer from './Footer';
import Nav from './Nav';
import "../Global.css";


const Window = () => {
  return (
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
      {/* <CarouselWindow /> */}
      <div id='services'>
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {/* <WhiteSpace /> */}
      <Footer />
    </div>
  );
};

export default Window;
