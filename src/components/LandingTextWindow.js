import React from "react";
import { Fade } from "react-reveal";
import { LandingText } from "../Global";

const LandingTextWindow = () => {
  return (
    <Fade duration={3000}>
      <div className="landing-text-container">
        <LandingText>
          You're <b className="landing-b-two">done. </b>
          <br />
          You need a vacation, but you <i>just</i> went on a weekend getaway.
          Your thoughts seem to run your life, along with your busy schedule,
          and{" "}
          <b className="landing-b-two">you just cant seem to get centered</b>{" "}
          through your work outs anymore—they are few and far between, anyways.
          <b className="landing-b-two">Taking care of yourself</b> seems to be
          number 100 on the to do list. There is just{" "}
          <b className="landing-b-two">not enough time to do everything, </b>and
          there is so much <b className="landing-b-two">pressure</b> to do it
          all, and perfectly.{" "}
          <b className="landing-b-two">Feeling disconnected</b> with your
          partner, family, and friends are no longer a rare occasion, and you
          know your{" "}
          <b className="landing-b-two">
            boss is starting to lose patience with you.
          </b>{" "}
          You can’t afford to cut anything out of your busy schedule, but you
          are starting to <b className="landing-b-two">lose it.</b> Things just
          feel so <b className="landing-b-two">out of control.</b> You don’t
          want to go <b className="landing-b-two">talk</b> to a therapist, but
          you know <b className="landing-b-two">you need something.</b> Feeling{" "}
          <b className="landing-b-two">lost, confused, and overwhelmed</b> is
          just a part of your daily routine, right along side your cup of
          coffee—oh, and make that a double espresso? Is{" "}
          <b className="landing-b-two">#stress </b> 
           what <b className="landing-b-two">adulting</b> has to offer?
        </LandingText>
      </div>
    </Fade>
  );
};

export default LandingTextWindow;
