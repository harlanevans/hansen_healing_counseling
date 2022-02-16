import React from "react";
import { Fade } from "react-reveal";
import {
  CompTitle,
  SmallerText,
  GlobalButton,
  ButtonDiv
} from "../Window/Global";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Window/Nav";
import Footer from "../Window/Footer";
import Contact from "../Window/Contact";
import EmdrImage from "../../assets/images/EMDR.jpeg";

const STBW = () => {

  return (
    <div>
      <Navbar />
      <div className="emdr-wrapper">
        <Fade duration={3000}>
          <div className="emdr-title">
            <CompTitle>Somatic Touch BodyWorker</CompTitle>
          </div>
        <SmallerText style={{ textAlign: "center" }}>
          Transforming Presence and Transforming Touch are modalities scientifically based on neurophysiology,
          attachment theory, polyvagal theory, and physics.
          It is one way to heal nonverbal and developmental trauma, without spoken language.
        </SmallerText>
        <div className="emdr-img-container">
          <img src={EmdrImage} className="emdr-image" alt="EMDRImg" />
        </div>
        <SmallerText style={{ textAlign: "center" }}>
          Together we allow your body and Nervous System to heal.
          Touch is never sexual and your needs and pace are always top priority.
          <hr style={{ padding: ".25em" }} />
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          Transforming the Experienced Based Brain (TEB) Transforming Presence or Intentional Touch:
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          TEB intentional touch is a modality that uses intention, attachment
          theory, and body movements to integrate and settle the Nervous System.
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          TEB Transforming Touch is a intentional modality that while
          a Nervous System is in Presence of Safe Touch, physiology may heal, settle, and integrate.
        </SmallerText>
        <SmallerText style={{ textAlign: "center" }}>
          <hr style={{ padding: ".25em" }} />
          <div>
          Research:
          </div>
          <a href="https://www.austinattach.com/research-on-the-effects-of-touch/" target="_blank" rel="noopener noreferrer">https://www.austinattach.com/research-on-the-effects-of-touch/</a>
        </SmallerText>
        <Contact />
        <ButtonDiv>
          <HashLink to="/#services">
            <GlobalButton>Go Back To Services</GlobalButton>
          </HashLink>
        </ButtonDiv>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}

export default STBW