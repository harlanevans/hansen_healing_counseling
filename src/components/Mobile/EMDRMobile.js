import React from "react";
import { Fade } from "react-reveal";
import { HashLink } from "react-router-hash-link";
import EMDRImage from "../../assets/images/EMDR.jpeg";
import EMDRMan from "../../assets/images/EMDRMan.jpg";

import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
import FooterMobile from "./FooterMobile";
import Nav from "./NavMobile";
import Contact from "./ContactMobile";

const EMDRMobile = () => {
  return (
    <div>
      <Nav />
      <Fade>
        <div className="emdr-mob-cont">
        <Fade duration={2000}>
          <div className="emdr-img-mob-cont">
            <img src={EMDRImage} className="emdr-img-mob-one" />
          </div>
        </Fade>
          <div style={{ paddingTop: "1em", textAlign: "center" }}>
          <Fade duration={2000} delay={500}>
            <MobTitle>EMDR</MobTitle>
          </Fade>
            <hr />
          </div>
          <div className="emdr-mob-text-cont">
            <Fade duration={2000} delay={750}>

            <MobText style={{ fontSize: "1.25em" }}>
              It has been said that{" "}
              <b className="landing-m-b-two">
                Eye Movement Desensitization Reprocessing is "a gift from the
                Gods".
              </b>{" "}
              In my opinion, it really is. You may have not ever heard of EMDR,
              but I'm sure your body could probably benefit from it.{" "}
            </MobText>
          </Fade>
          <Fade duration={2000}>
            <div className="mob-one-emdr">
              <MobText>
                When trauma happens (that can be basically anything) it{" "}
                <i>literally</i> gets trapped in our bodies. Ever wonder why all
                of a sudden you smell your ex-from-10,000-years-ago's
                perfume/cologne when walking in the mall? It's because the
                memory gets triggered and your body responds to that memory.
              </MobText>
            </div>
          </Fade>
          <Fade duration={2000}>
            <MobText>
              Now, I’m really hoping it didn't end too badly with your ex, but
              you can only imagine how it can really get{" "}
              <b className="landing-m-b-two">intense</b> if you got in a
              terrible car accident and that memory gets{" "}
              <b className="landing-m-b-two">triggered.</b> The sound of someone
              dropping a dinner glass can trigger you into feeling you are about
              to get side swiped by some huge metal object. Horrifying!
            </MobText>
          </Fade>
          </div>
          <Fade duration={2000}>
          <div style={{ textAlign: "center" }} className="mob-two-emdr">
            <MobText>
              The body centered theory suggests that after doing EMDR,
              eventually the car accident memory{" "}
              <b className="landing-m-b-two">
                will not be as emotionally charged.
              </b>{" "}
              So that means that the next time your girlfriend accidentally
              drops her wine glass, you can just go help her clean up{" "}
              <b className="landing-m-b-two">calmly</b> and{" "}
              <b className="landing-m-b-two">collected. No anxiety there.</b>{" "}
              Sounds wonderful, right?
            </MobText>
          </div>
          </Fade>
          <Fade duration={2000}>
          <div className="emdr-img-mob-cont-two">
            <img src={EMDRMan} className="emdr-img-mob-one" />
          </div>
          </Fade>
          <Fade duration={2000}>
          <div style={{ textAlign: "center" }}>
            <MobText>
              Francine Shapiro is our homegirl who found that moving the eyes
              side to side, or using bilateral stimulation significantly reduced
              negative thoughts and traumatic memories. EMDR was born, and this
              full blown
              <b className="landing-m-b-two">
                <i> body centered magic</i>
              </b>{" "}
              is now used to help reduce almost any form of psychological
              distress.
            </MobText>
          </div>
          </Fade>
          <Fade duration={2000}>
          <div style={{ textAlign: "center" }}>
            <MobText>
              I have helped many people with this healing modality, and am now
              accepting patients on a case by case basis. I am available to work
              on issues such as{" "}
              <b className="landing-m-b-two">
                car accidents, anxiety and stress issues, self esteem and self
                worth, and issues from athletic injuries.
              </b>
            </MobText>
          </div>
          </Fade>
          <Fade duration={2000}>
          <ButtonDivMob style={{ padding: "2em 0em" }}>
            <a
              href="https://www.emdria.org/page/what_is_emdr_therapy"
              target="_blank"
              rel="noopener noreferrer"
              >
              <MobileButton>Learn More About EMDR</MobileButton>
            </a>
          </ButtonDivMob>
              </Fade>
          <Fade duration={2000}>
          <MobText
            style={{
              fontSize: "1.25em",
              textAlign: "center",
              // padding: ".5em",
              paddingBottom: "0"
            }}
          >
            Fill out the Contact Form now to set up a consultation.
          </MobText>
          <MobText
            style={{ padding: "0", margin: "0" }}
            className="emdr-mob-list"
          >
            <ul className="emdr-ul">
              <li>50 min session: $150</li>
              <li>80 min session: $225</li>
              <li>100 min session: $300</li>
            </ul>
          </MobText>
            </Fade>
          <hr />
          <ButtonDivMob style={{ paddingTop: '1em' }}>
            <HashLink to="/#contact">
              <MobileButton>Contact Me</MobileButton>
            </HashLink>
          </ButtonDivMob>
          <MobTitle
            style={{
              textAlign: "center",
              fontSize: "1.25em",
              padding: "2em",
              paddingBottom: '1em'
            }}
          >
            Or
          </MobTitle>
          <ButtonDivMob>
            <HashLink to="/#services">
              <MobileButton>Go Back To Services</MobileButton>
            </HashLink>
          </ButtonDivMob>
        </div>
      </Fade>
      <FooterMobile />
    </div>
  );
};

export default EMDRMobile;
