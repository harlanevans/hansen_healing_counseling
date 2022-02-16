import React from "react";
import {
  MobTitle,
  MobText,
  ButtonDivMob,
  MobileButton
} from "./Styles";
import Hayley from "../../assets/images/HMeditate.jpg";
import { HashLink } from "react-router-hash-link";
import MobileNav from "./NavMobile";
import Footer from "./FooterMobile";

const AHayleyMobile = () => {
  return (
    <div>
      <MobileNav />
      <div className="habout-cont">
        <div>
          <img src={Hayley} className="habout-image" alt='hayley hansen' />
        </div>
        <MobTitle style={{ textAlign: "center", paddingTop: "1em" }}>
          Meet Hayley
        </MobTitle>
        {/* <div className="habout-text-cont"> */}
        <div className="habout-box-one">
          <MobText>
            It has taken me 15 years of collegiate study,
            introspection, dozens of continuing education and training,
            healing, and practice to land in my dharma of holding space as a bodyworker.
            The more I practice and trust Vitality the more
            I know it is where I am meant to be to help raise humanity's vibration.
          </MobText>
        </div>
        <div className="habout-box-two">
          <MobText>
            If there’s one thing I’ve learned since the pandemic began is that we
            heal in connection. In the compassionate presence of another person,
            our bodies have potential to reach a new normal.
            A normal that feels like our wildest dreams and fullest potential.
          </MobText>
        </div>
        <div className="habout-box-three">
          <MobText>
            Lovely human, beyond injury and trauma lies deep vitality.
          </MobText>
        </div>
        <hr />
        <div className="ps-habout">
          <MobText>
            It is my intention that after you leave my table,
            you begin to feel settled, free, creative, and connected--to yourself and others.
          </MobText>
        </div>
        <MobText style={{marginTop: '2em'}}>
          <b>Training: </b>
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
          </div>
        </MobText>
        <ButtonDivMob style={{ padding: "1em" }}>
          <HashLink to="/#about">
            <MobileButton>Go Back</MobileButton>
          </HashLink>
        </ButtonDivMob>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default AHayleyMobile;
