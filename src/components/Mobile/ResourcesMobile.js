import React from "react";
import { Fade } from "react-reveal";

import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
import { HashLink } from "react-router-hash-link";
import CMeditate from "../../assets/images/C-Meditate.jpg";

import FooterMobile from "./FooterMobile";
import Nav from "./NavMobile";

const Resources = () => {

  return (
    <div>
      <Nav />
      <div className="resources-mob-cont">
        <Fade duration={3000}>
          <div style={{ paddingTop: "2em", textAlign: "center" }}>
            <MobTitle>Resources</MobTitle>
            <hr />
          </div>
          <div className="emdr-img-container">
            <img src={CMeditate} className="emdr-image" alt="EMDRImg" />
          </div>
          <MobText style={{ textAlign: "center" }} className='emdr-mob-text-cont'>
            <div style={{ paddingBottom: '2em' }}>
              The nervous system runs off the food and drink we put in our bodies,
              and responds to physical movement output, just like a car runs off the gas and oil we put into it.
            </div>
            <div className="mob-one-emdr">
              In the most loving way, I invite you to
              assess your nutritional and exercise rituals, to maximize your healing potential.
            </div>
            <div style={{ paddingBottom: '2em' }}>
              I have some referrals for a body positive personal trainer, and a nutritionist, and other body based modalities if you need support meeting your goals.
            </div>
          </MobText>
          <div style={{
            paddingTop: "2em",
            borderTop: "solid 1px #E8E8E8"
          }}>
            <ButtonDivMob>
              <HashLink to="/#services">
                <MobileButton>Go Back To Services</MobileButton>
              </HashLink>
            </ButtonDivMob>
          </div>
        </Fade>
      </div>
      <FooterMobile />
    </div>
  )
}

export default Resources