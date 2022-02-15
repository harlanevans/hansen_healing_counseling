import React from "react";
import { Fade } from "react-reveal";
import {
  CompTitle,
  SmallerText,
  GlobalButton,
  ButtonDiv
} from "../Window/Global";
import { HashLink } from "react-router-hash-link";
import Navbar from "./Nav";
import Footer from "./Footer";

const AboutHayley = () => {
  return (
    <div>
      <Navbar />
      <div className="ab-hay-wrapper">
        <Fade duration={3000}>
          <CompTitle>About Hayley</CompTitle>
        </Fade>
        <Fade duration={3000} delay={500}>
          <SmallerText>
            It has taken me 15 years of collegiate study, introspection, dozens of continuing education
            and training, healing, and practice to land in my
            dharma of holding space as a bodyworker.
            The more I practice and trust Vitality the more I know it is where I
            am meant to be to help raise humanity's vibration.
          </SmallerText>
          <SmallerText>
            If there’s one thing I’ve learned since the pandemic began
            is that we heal in connection. In the compassionate presence of another person,
            our bodies have potential to reach a new normal.
            A normal that feels like our wildest dreams and fullest potential.
          </SmallerText>
          <SmallerText>
            Lovely human, beyond injury and trauma lies deep vitality.
          </SmallerText>
        </Fade>
        <Fade duration={3000} delay={1000}>
          <SmallerText>
            It is my intention that after you leave my table, you begin to feel settled,
            free, creative, and connected--to yourself and others.
          </SmallerText>
        </Fade>
        <Fade duration={3000} delay={1500}>
          <SmallerText style={{ paddingTop: '2em' }}>
            <div style={{marginBottom: '1em'}}>
            <b >Training: </b>
            </div>
            <div>
              Bachelors in Psychology from Utah State University
              <hr />
            </div>
            <div>
              Masters in Counseling from Arizona State University
              <hr />
            </div>
            <div>
              200 (RYT) Yoga Teacher Training at Gilbert Yoga
              <hr />
            </div>
            <div>
              MBSR Experiential Training (2018)
              <hr />
            </div>
            <div>
              Transforming the Experience Based Brain (TEB) current
              <hr />
            </div>
          </SmallerText>
          <ButtonDiv>
            <HashLink to="/#about">
              <GlobalButton>Go Back</GlobalButton>
            </HashLink>
          </ButtonDiv>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default AboutHayley;
