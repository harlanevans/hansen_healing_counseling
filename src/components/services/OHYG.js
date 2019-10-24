import React from "react";
import { Fade } from "react-reveal";
import {
  CompTitle,
  Text,
  GlobalButton,
  ButtonDiv,
  SmallerText
} from "../Window/Global";
import { HashLink } from "react-router-hash-link";
import YogaImage from "../../assets/images/OHYG.jpeg";
import YogaImageTwo from "../../assets/images/MobOHYG.jpg";

import Footer from "../Window/Footer";
import Navbar from "../Window/Nav";
import Contact from "../Window/Contact";

const OHYG = () => {
  return (
    <div>
      <Navbar />
      <div className="yoga-wrapper">
        <Fade>
          <div className="yoga-title">
            <CompTitle>Organic Healing Yoga Group</CompTitle>
          </div>
        </Fade>
        <div className="yoga-img-container">
          <img src={YogaImage} className="yoga-image" alt="YogaHealingGroup" />
        </div>

        <Text style={{ textAlign: "center" }}>
          <b className="landing-bold">Allow your body to heal itself. </b>
          We have what we need, organically, to heal our minds and hearts. When
          our wise bodies are given the space, tools, and some movement,
          <b className="landing-bold">miracles happen.</b>
        </Text>
        <div className="bullet-yoga">
          <SmallerText>
            <hr />
            This group is for you if you are feeling like{" "}
            <b className="landing-bold">you need a miracle</b> to help you with:
            <ul>
              <li>
                Physical symptoms like headaches, insomnia, and constant aches
                and pains from all the{" "}
                <b className="landing-bold">stress, anxiety, and pressure</b>{" "}
                life demands.
              </li>
              <li>
                The <b className="landing-bold">disconnection</b> from your true
                self and ask yourself things like{" "}
                <b className="landing-bold">“who am I...?"</b> and{" "}
                <b className="landing-bold">"what is the point of all this?"</b>
              </li>
              <li>
                Your{" "}
                <b className="landing-bold">thoughts. They run the show,</b> and
                you're <b className="landing-bold">tired.</b>
              </li>
              <li>
                Feeling <b className="landing-bold">EXHAUSTED</b> from your{" "}
                <b className="landing-bold">never-ending</b> to-do lists and
                intense, insanely busy schedule.
              </li>
            </ul>
          </SmallerText>
        </div>
       
        <div className="yoga-img-container">
          <img
            src={YogaImageTwo}
            className="yoga-image"
            alt="YogaHealingGroup"
          />
        </div>
        <div className="bullet-yoga">
          <SmallerText>
            Through <b className="landing-bold">natural bodywork </b>methods, I
            hold a space to help you embody:
            <ul>
              <li>
                <b className="landing-bold">Simplicity</b> and more space to
                access <b className="landing-bold">joy</b> (#yesplease).
              </li>
              <li>
                Feeling more{" "}
                <b className="landing-bold">connected, rooted, and grounded</b>{" "}
                to your body and the <b className="landing-bold">present</b>{" "}
                moment.
              </li>
              <li>
                A feeling of <b className="landing-bold">being in charge</b> of
                your{" "}
                <b className="landing-bold">
                  emotions, your thoughts, and your life.
                </b>
              </li>
              <li>
                Increased self-confidence that{" "}
                <b className="landing-bold">
                  you can show up as your truest and best authentic self at work
                </b>{" "}
                and in your treasured{" "}
                <b className="landing-bold">relationships.</b>
              </li>
              <li>
                Practices and skills to{" "}
                <b className="landing-bold">put yourself first,</b> without
                having to sacrifice your <b className="landing-bold">goals.</b>
              </li>
            </ul>
            <hr />
          </SmallerText>
        </div>
        
        {/* <div className="yoga-title">
          <Text>
            Help yourself go from scattered and stressed to{" "}
            <b className="landing-bold">centered and empowered. </b>
          </Text>
        </div> */}
        <div className="yoga-title">
          <Text>Fill out the Contact Form and I will be in touch!</Text>
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

export default OHYG;
