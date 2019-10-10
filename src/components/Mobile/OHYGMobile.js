import React from "react";
import { Fade } from "react-reveal";
import { HashLink } from "react-router-hash-link";
import OHYGImage from "../../assets/images/OHYG.jpeg";
import OHYGImageTwo from "../../assets/images/MobOHYG.jpg";

import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
import FooterMobile from "./FooterMobile";
import Nav from "./NavMobile";

const OHYGMobile = () => {
  return (
    <div>
      <Nav />
      <Fade>
        <div className="yoga-container">
          <Fade duration={2000}>
            <div className="ohyg-img-mob-cont">
              <img src={OHYGImage} alt="healing" className="ohyg-img-mob" />
            </div>
          </Fade>
          <div style={{ textAlign: "center", padding: "1em" }}>
            <Fade duration={2000} delay={500}>
              <MobTitle>Organic Healing Yoga Group</MobTitle>
            </Fade>
          </div>
          <hr />
          <Fade duration={2000} delay={750}>
            <div className="ohyg-text-cont">
              <MobText style={{ fontSize: "1.25em" }}>
                Are you a high achieving, stressed out, active Millennial who is
                ready
                <b className="landing-m-b-two">
                  to start to feel empowered, centered, and calm?{" "}
                </b>
              </MobText>
            </div>
          </Fade>
          {/* <hr /> */}
          <Fade duration={2000}>
            <div className="ohyg-text-cont-two">
              <MobText>
                My deep intention for this group is to hold a space where you
                can
                <b className="landing-m-b-two">
                  {" "}
                  come and allow your body heal itself.
                </b>{" "}
                Just like when we accidentally cut our finger and our body goes
                wild to repair itself,{" "}
                <b className="landing-m-b-two">
                  we have what we need within us to heal our minds and hearts.
                </b>{" "}
                Our bodies are so incredibly wise, and when given the space,
                tools, and some movement,{" "}
                <b className="landing-m-b-two">miracles happen.</b>
              </MobText>
            </div>
          </Fade>
          <hr />
          <Fade duration={2000}>
            <div style={{ textAlign: "center" }}>
              <MobText>
                This group is for you if you are feeling like{" "}
                <b className="landing-m-b-two"> you need a miracle </b>
                to help you with:
              </MobText>
            </div>
            <div className="ohyg-list">
              <MobText>
                <ul>
                  <li>
                    Physical symptoms like headaches, insomnia, and constant
                    aches and pains from all the{" "}
                    <b className="landing-m-b-two">
                      stress, anxiety, and pressure
                    </b>{" "}
                    life demands
                  </li>
                  <li>
                    The <b className="landing-m-b-two">disconnection</b> from
                    your true self and ask yourself things like{" "}
                    <b className="landing-m-b-two">“who am I...?"</b> and{" "}
                    <b className="landing-m-b-two">
                      "what is the point of all this?"
                    </b>
                  </li>
                  <li>
                    Your{" "}
                    <b className="landing-m-b-two">
                      thoughts. They run the show,
                    </b>{" "}
                    and you're <b className="landing-m-b-two">tired.</b>
                  </li>
                  <li>
                    Feeling <b className="landing-m-b-two">EXHAUSTED</b> from
                    your <b className="landing-m-b-two">never-ending</b> to-do
                    lists and intense, insanely busy schedule.
                  </li>
                </ul>
              </MobText>
            </div>
          </Fade>
          <Fade duration={2000}>
            <div className="ohyg-img-mob-cont-two">
              <img src={OHYGImageTwo} alt="healing" className="ohyg-img-mob" />
            </div>
          </Fade>
          <Fade duration={2000}>
            <div style={{ textAlign: "center" }}>
              <MobText>
                Through <b className="landing-m-b-tow">organic</b> and{" "}
                <b className="landing-m-b-tow">natural bodywork </b>methods, I
                hold a space to help you embody:
              </MobText>
            </div>
            <div className="ohyg-list">
              <MobText>
                <ul>
                  <li>
                    <b className="landing-m-b-two">Simplicity</b> and more space
                    to access <b className="landing-m-b-two">joy</b>{" "}
                    (#yesplease).
                  </li>
                  <li>
                    Feeling more{" "}
                    <b className="landing-m-b-two">
                      connected, rooted, and grounded
                    </b>{" "}
                    to your body and the{" "}
                    <b className="landing-m-b-two">present</b> moment.
                  </li>
                  <li>
                    A feeling of{" "}
                    <b className="landing-m-b-two">being in charge</b> of your{" "}
                    <b className="landing-m-b-two">
                      emotions, your thoughts, and your life.
                    </b>
                  </li>
                  <li>
                    Increased self-confidence that{" "}
                    <b className="landing-m-b-two">
                      you can show up as your truest and best authentic self at
                      work
                    </b>{" "}
                    and in your treasured
                    <b className="landing-m-b-two">relationships.</b>
                  </li>
                  <li>
                    Practices and skills to{" "}
                    <b className="landing-m-b-two">put yourself first,</b> with
                    out having to sacrifice your{" "}
                    <b className="landing-m-b-two">goals.</b>
                  </li>
                </ul>
              </MobText>
            </div>
          </Fade>
          <hr />
          <ButtonDivMob style={{paddingTop: '1em'}}>
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

export default OHYGMobile;
