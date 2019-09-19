import React from "react";
// import { WhiteBGGlobal } from "../Global";
import Image from "../assets/images/Hayley_About.jpg";
import { Fade } from "react-reveal";
import { SubTitleAbout, AboutText } from "../Global";

const About = () => {
  return (
    <div className="about-padding">
      <div className="about-header">
        <Fade>
          <SubTitleAbout>About Hayley Hansen</SubTitleAbout>
          <img src={Image} className="about-image" alt="hayley" />
        </Fade>
      </div>
      <Fade>
        <AboutText>
          I moved to the desert seeking healing and learning, and boy did I find
          it! I am a Licensed Professional Counselor, with my academic career
          starting in 2007. With a Bachelors of Science in Psychology and Family
          Consumer Human Development from Utah State University, I preceded to
          graduate from Arizona State University with my Masters in Counseling
          in 2013. I have been practicing now for seven years and it has been
          such a wonderful learning experience. I have continued my journey and
          received my 200 level Registered Yoga Teacher (RYT) certificate this
          last year. Along with my RYT certificate, I am trained in EMDR,
          Mindfulness Based Stress Reduction, and Dialectical Behavioral Therapy
          (DBT). The populations I love to work with are teenagers (12 and up)
          and young adults/college age men and women. I love to work with Empath
          or Highly Sensitive People, and those people who just need a break!
        </AboutText>
      </Fade>
      {/* <Fade duration={2500} left>
              <SubTitleAbout>
              I’ve given you the clinical important stuff. Now I’ll give you
                the dirt.
              </SubTitleAbout>
              </Fade>
          <Fade duration={2500} left>
          <AboutText>
                I moved to the desert seeking healing and learning, and boy did
                I find it! I am a Licensed Professional Counselor, with my
                academic career starting in 2007. With a Bachelors of Science in
                Psychology and Family Consumer Human Development from Utah State
                University, I preceded to graduate from Arizona State University
                with my Masters in Counseling in 2013. I have been practicing
                now for seven years and it has been such a wonderful learning
                experience.
              </AboutText> */}
      <Fade>
        <div className="about-button">
          <button>More about Hayley</button>
        </div>
      </Fade>
      {/* </Fade> */}

      {/* </WhiteBGGlobal> */}
    </div>
  );
};

export default About;
