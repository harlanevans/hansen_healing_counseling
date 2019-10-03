import React from "react";
import { Fade } from "react-reveal";
import {
  CompTitle,
  Text,
  SmallerText,
  GlobalButton,
  ButtonDiv
} from "../Window/Global";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Window/Nav";
import Footer from "../Window/Footer";
import Contact from "../Window/Contact";
import EmdrImage from "../../assets/images/EMDR.jpeg";


const EMDR = () => {
  return (
    <div>
      <Navbar />
      <div className="emdr-wrapper">
        <Fade>
          <div className="emdr-title">
            <CompTitle>EMDR</CompTitle>
          </div>
        </Fade>
        <Text style={{ textAlign: "center" }}>
          It has been said that <b className="landing-bold">Eye Movement Desensitization Reprocessing is "a
          gift from the Gods".</b> In my opinion, it really is. You may have not
          ever heard of EMDR, but I'm sure your body could probably benefit from
          it.{" "}
        </Text>
        <SmallerText style={{ textAlign: "center" }}>
          When trauma happens (that can be basically anything) it <i>literally</i> gets
          trapped in our bodies. Ever wonder why all of a sudden you smell your
          ex-from-10,000-years-ago's perfume/cologne when walking in the mall?
          It's because the memory gets triggered and your body responds to that
          memory. Now, I’m really hoping it didn't end too badly with your ex,
          but you can only imagine how it can really get <b className="landing-bold">intense</b> if you got in a
          terrible car accident and that memory gets <b className="landing-bold">triggered.</b> The sound of
          someone dropping a dinner glass can trigger you into feeling you are
          about to get side swiped by some huge metal object. Horrifying!
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          <hr style={{ padding: ".25em" }} />
          The body centered theory suggests that after doing EMDR, eventually
          the car accident memory <b className="landing-bold">will not be as emotionally charged.</b> So that
          means that the next time your girlfriend accidentally drops her wine
          glass, you can just go help her clean up <b className="landing-bold">calmly</b> and <b className="landing-bold">collected. No
          anxiety there.</b> Sounds wonderful, right?
        </SmallerText>
        <div className="emdr-img-container">
          <img src={EmdrImage} className="emdr-image" alt="EMDRImg" />
        </div>
        <SmallerText style={{ textAlign: "center" }}>
          Francine Shapiro is our homegirl who found that moving the eyes side
          to side, or using bilateral stimulation significantly reduced negative
          thoughts and traumatic memories. EMDR was born, and this full blown
          <b className="landing-bold"><i> body centered magic</i></b> is now used to help reduce almost any form of
          psychological distress.
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          <hr style={{ padding: ".25em" }} />I have helped many people with this
          healing modality, and am now accepting patients on a case by case
          basis. I am available to work on issues such as <b className="landing-bold">car accidents, anxiety
          and stress issues, self esteem and self worth, and issues from
          athletic injuries.</b>
        </SmallerText>

        <ButtonDiv>
          <a
            href="https://www.emdria.org/page/what_is_emdr_therapy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobalButton>Learn More About EMDR</GlobalButton>
          </a>
        </ButtonDiv>
        <div className="emdr-title">
          <Text>Fill out the Contact Form now to set up a consultation.</Text>
        </div>
        <div className="bullet-emdr">
          <SmallerText>
            <ul>
              <li>50 min session: $150</li>
              <li>80 min session: $225</li>
              <li>100 min session: $300</li>
            </ul>
          </SmallerText>
        </div>

        <Contact />
        <ButtonDiv>
          <HashLink to="/#services">
            <GlobalButton>Go Back To Services</GlobalButton>
          </HashLink>
        </ButtonDiv>
      </div>
      <Footer />
    </div>
  );
};

export default EMDR;
