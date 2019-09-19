import React from "react";
import { Fade } from "react-reveal";
import { MobileLandingText } from "./Styles";

const LandingText = () => {
  return (
    <div>
        <div className="landing-title-container-mobile">
          <Fade duration={2000}>
              <div>
                <MobileLandingText>
                  For the athletic Millennial who is ready to take their{" "}
                  <b>stressed out, overthinking, autopilot </b>modern lifestyle
                  to the healing place of{" "}
                  <b>empowerment, body-centered authenticity, simplicity,</b>
                  and <b>living in the present.</b>
                </MobileLandingText>
                <MobileLandingText>
                  You&#39;re <b>done.</b> You need a vacation, but you{" "}
                  <i>just</i> went on a weekend getaway. Your thoughts seem to
                  run your life, along with your busy schedule, and{" "}
                  <b>
                    you just cant seem to get in the Flow, let alone centered
                  </b>{" "}
                  through your work outs anymore—they are few and far between,
                  anyways. You really enjoy physical movement, and when you are
                  active you are at your best, but life got in the way, and
                  taking care of you seems to be number 100 on the to do list.{" "}
                  <b>Feeling disconnected </b>with your partner, family, and
                  friends are no longer a rare occasion, and you&#39;re starting
                  to even think your fur baby is feeling neglected by you.
                  Feeling
                  <b> lost, confused, </b>and <b>overwhelmed </b>about{" "}
                  <b>your life </b>is just a part of your daily routine, right
                  along side your cup of coffee—oh, and make that a double
                  espresso? <b>#Stress</b> seems to just be what adulting life
                  has to offer.
                </MobileLandingText>
                <div className="landing-text-list-mobile">
                  <MobileLandingText>
                    Through <b>organic, body centered healing </b>modalities,
                    the group will help you embody:
                  </MobileLandingText>
                  <MobileLandingText>
                    <ul>
                      <li>
                        <b>Simplicity</b>
                      </li>
                      <li>
                        More <b>Joy</b> and more <b>peace</b>(#yesplease).
                      </li>
                      <li>
                        Feeling more{" "}
                        <b>connected, rooted, and grounded to your body</b> and
                        the <b>present</b> in as little as 12 weeks.
                      </li>
                      <li>
                        A feeling of <b>being in charge</b> of your
                        <b> emotions, thoughts, and life.</b>
                      </li>
                      <li>
                        Increased self-confidence that{" "}
                        <b>
                          you can show up as your truest and best authentic self
                        </b>{" "}
                        at work and in your treasured
                        <b> relationships.</b>
                      </li>
                      <li>
                        <b>Decreased </b>physical annoyances like headaches and
                        body aches
                      </li>
                    </ul>
                    Help yourself go from scattered and stressed to centered and
                    empowered.
                  </MobileLandingText>
                </div>
                <MobileLandingText style={{ padding: "2em" }}>
                  <b className="im-hayley">I&#39;m Hayley.</b> Through bodywork,
                  I help athletic Millennials just like you overhaul their
                  disconnected and chaotic lifestyles to grounded, embodied, and
                  simple authentic ones, so that you can live in the present
                  moment with crazy amounts of intention, joy, and calm.
                </MobileLandingText>
                <MobileLandingText>
                  <center>
                    <b className="im-hayley">
                      Complete the form below to learn more
                    </b>
                  </center>
                </MobileLandingText>
              </div>
          </Fade>
        </div>
    </div>
  );
};

export default LandingText;
