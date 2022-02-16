import React from "react";
import { Fade } from "react-reveal";
import { HashLink } from "react-router-hash-link";
import EMDRImage from "../../assets/images/EMDR.jpeg";
import EMDRMan from "../../assets/images/EMDRMan.jpg";

import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
import FooterMobile from "./FooterMobile";
import Nav from "./NavMobile";

const STBWMobile = () => {

  return (
    <div>
      <Nav />
      <Fade duration={3000}>
        <div className="emdr-mob-cont">
          <div style={{ paddingTop: "1em", textAlign: "center" }}>
            <MobTitle>Somatic Touch BodyWorker</MobTitle>
            <hr />
          </div>
          <div className="emdr-img-mob-cont">
            <img src={EMDRImage} className="emdr-img-mob-one" alt='emdr' />
          </div>
          <div className="emdr-mob-text-cont">
            <MobText>
              Transforming Presence and Transforming Touch are modalities scientifically based
              on neurophysiology, attachment theory, polyvagal theory, and physics.
              It is one way to heal nonverbal and developmental trauma, without spoken language.
            </MobText>
            <div className="mob-one-emdr">
              <MobText>
                Together we allow your body and Nervous System to heal.
                Touch is never sexual and your needs and pace are always top priority.
              </MobText>
            </div>
            <div className="mob-one-emdr">
              <MobText>
                Transforming the Experienced Based Brain (TEB) Transforming Presence or Intentional Touch:
              </MobText>
              <MobText>
                TEB intentional touch is a modality that uses intention, attachment theory,
                and body movements to integrate and settle the Nervous System.
              </MobText>
            </div>
          </div>
          <div className="mob-two-emdr">
            <MobText>
              TEB Transforming Touch is a intentional modality that while a
              Nervous System is in Presence of Safe Touch, physiology may heal, settle, and integrate.
            </MobText>
          </div>
          <div className="emdr-img-mob-cont-two">
            <img src={EMDRMan} className="emdr-img-mob-one" alt='emdr' />
          </div>
          <div style={{ textAlign: "center", paddingBottom: '1em' }}>
            <MobText>
              <div>
                Research:
              </div>
              <a href="https://www.austinattach.com/research-on-the-effects-of-touch/" target="_blank" rel="noopener noreferrer">https://www.austinattach.com/research-on-the-effects-of-touch/</a>

            </MobText>
          </div>
          <div style={{
            paddingTop: "2em",
            borderTop: "solid 1px #E8E8E8"
          }}>
            <ButtonDivMob>
              <HashLink to="/#contact">
                <MobileButton>Contact Me</MobileButton>
              </HashLink>
            </ButtonDivMob>
            <MobTitle
              style={{
                textAlign: "center",
                fontSize: "1.25em",
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
        </div>
      </Fade>
      <FooterMobile />
    </div>
  )
}

export default STBWMobile