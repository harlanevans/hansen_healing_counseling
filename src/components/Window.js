import React from "react";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import CarouselWindow from "./CarouselWindow";
import { WhiteSpace } from "../Global";
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
      <div id="about">
        <About />
      </div>
      <CarouselWindow />
      <div id="contact">
        <Contact />
      </div>
      {/* <WhiteSpace /> */}
      <div id='services'>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Window;
