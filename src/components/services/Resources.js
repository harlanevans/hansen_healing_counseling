import React from "react";
import { Fade } from "react-reveal";
import {
  CompTitle,
  SmallerText,
  GlobalButton,
  ButtonDiv
} from "../Window/Global";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Window/Nav";
import Footer from "../Window/Footer";
import CMeditate from "../../assets/images/C-Meditate.jpg";

const Resources = () => {

  return (
    <div>
      <Navbar />
      <div className="emdr-wrapper">
        <Fade duration={3000}>
          <div className="emdr-title">
            <CompTitle>Resources</CompTitle>
          </div>
          <SmallerText style={{ textAlign: "center", paddingBottom: '2em' }}>
            The nervous system runs off the food and drink we put in our bodies,
            and responds to physical movement output, just like a car runs off the gas and oil we put into it.
          </SmallerText>
          <div className="emdr-img-container">
            <img src={CMeditate} className="emdr-image" alt="EMDRImg" />
          </div>
          <SmallerText style={{ textAlign: "center" }}>
            In the most loving way, I invite you to
            assess your nutritional and exercise rituals, to maximize your healing potential.
            <hr style={{ padding: ".25em" }} />
          </SmallerText>
          <SmallerText style={{ textAlign: "center" }}>
            I have some referrals for a body positive personal trainer, and a nutritionist, and other body based modalities if you need support meeting your goals.
          </SmallerText>
          <ButtonDiv>
            <HashLink to="/#services">
              <GlobalButton>Go Back To Services</GlobalButton>
            </HashLink>
          </ButtonDiv>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}

export default Resources