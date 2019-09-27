import React from "react";
import { Fade } from "react-reveal";
import { MobileLandingText } from "./Styles";

const LandingText = () => {
  return (
    <div className="landing-title-container-mobile">
      <div className="landing-m-text">
        <Fade duration={2000}>
          <MobileLandingText>
            You're <b className="landing-m-b-two">done. </b>
            <br />
            You need a vacation, but you <i>just</i> went on a weekend getaway.
            Your thoughts seem to run your life, along with your busy schedule,
            and{" "}
            <b className="landing-m-b-two">
              you just cant seem to get centered
            </b>{" "}
            through your work outs anymore—they are few and far between,
            anyways.
            <b className="landing-m-b-two">Taking care of yourself</b> seems to
            be number 100 on the to do list. There is just{" "}
            <b className="landing-m-b-two">
              not enough time to do everything,{" "}
            </b>
            and there is so much <b className="landing-m-b-two">pressure</b> to
            do it all, and perfectly.{" "}
          </MobileLandingText>
        </Fade>
      </div>
      <div className="landing-m-text">
        <Fade duration={2000} delay={500}>
          <MobileLandingText>
            <b className="landing-m-b-two">Feeling disconnected</b> with your
            partner, family, and friends are no longer a rare occasion, and you
            know your{" "}
            <b className="landing-m-b-two">
              boss is starting to lose patience with you.
            </b>{" "}
            You can’t afford to cut anything out of your busy schedule, but you
            are starting to <b className="landing-m-b-two">lose it.</b> Things
            just feel so <b className="landing-m-b-two">out of control.</b> You
            don’t want to go <b className="landing-m-b-two">talk</b> to a
            therapist, but you know{" "}
            <b className="landing-m-b-two">you need something.</b> Feeling{" "}
            <b className="landing-m-b-two">lost, confused, and overwhelmed</b>{" "}
            is just a part of your daily routine, right along side your cup of
            coffee—oh, and make that a double espresso? Is{" "}
            <b className="landing-m-b-two">#stress </b>
            what <b className="landing-m-b-two">adulting</b> has to offer?
          </MobileLandingText>
        </Fade>
      </div>
    </div>
  );
};

export default LandingText;
