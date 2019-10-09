import React from "react";
import { Fade } from "react-reveal";
import { CompTitle, SmallerText, Text, GlobalButton, ButtonDiv } from "../Window/Global";
import { HashLink } from 'react-router-hash-link';
import Navbar from './Nav';
import Footer from './Footer';

const AboutHayley = () => {
  return (
    <div>
    <Navbar />
    <div className='ab-hay-wrapper'>
    <Fade  duration={3000}>
      <CompTitle>About Hayley</CompTitle>
    </Fade>
    <Fade duration={3000} delay={500}>
      <SmallerText>
        With my academic career starting in 2007, I received a Bachelors of
        Science in Psychology and Family Consumer Human Development from Utah
        State University. I preceded to graduate from Arizona State University
        with my Masters in Counseling in 2013, and have been practicing the art
        of healing since.
      </SmallerText>
      <SmallerText>
        In my fifth year of practice, I received my 200 level Registered Yoga
        Teacher (RYT) certificate in 2018. I am also trained in EMDR,
        Mindfulness Based Stress Reduction, and Dialectical Behavioral Therapy
        (DBT).
      </SmallerText>
      <SmallerText>
        I dont think talk therapy is always the best route for everyone.
        Sometimes a person needs to <b className="landing-bold">move.</b> A person needs actual <b className="landing-bold"><i>practice </i></b> using
        skills will help them, so when they are outside of group, they know in
        their bones what to do when they are in distress. I know that our bodies
        have more wisdom and natural ability to heal on their own than we think,
        <i> especially</i> in the realm of emotional and mental healing. <b className="landing-bold">We need to give
        these amazing bodies of ours the space to do so.</b>
      </SmallerText>
    </Fade>
    <Fade duration={3000} delay={1000}>
      <Text style={{textAlign: 'center'}}>
       <b className="landing-bold"> P.S. I’ve given you the clinical stuff. Now I’ll give you the dirt.</b>
      </Text>
    </Fade>
    <Fade duration={3000} delay={1500}>
      <div className='bullet-hay'>

      <SmallerText>
        <ul>
          <li>
            I’ve been obsessed with mindful movement ever since I could
            walk—climbing trees, playing sports, trail running, swimming,
            lifting, and now moving and breathing Yoga.
          </li>
          <li>
            I was sorted into Hufflepuff, wish I could major in Herbology, and
            often ask myself “What Would Dumbledore Do”?
          </li>
          <li>
            Recently, I’m crazy about the ocean. We haven’t explored all the
            mystery in there, so obviously I believe in mermaids.
          </li>
          <li>Phoebe from Friends is my spirit animal. </li>
          <li>
            My favorite yoga pose is either Happy Baby or Tree Pose. I’m tied
            because I love babies and trees with all my heart!
          </li>
          <li>
            Brutus and Kiko are my two dogs and absolute favorite souls to be
            around.
          </li>
          <li>
            My favorite fleeting scent that can never be captured is the
            Creosote Bush after it rains. If you rub the leaves together, it
            smells like Phoenix after a good rain.
          </li>
          <li>
            {" "}
            I have personally experienced body centered healing, and it has
            changed my life.{" "}
          </li>
        </ul>
      </SmallerText>
      </div>
        <ButtonDiv>
          <HashLink to="/#about">
            <GlobalButton>Go Back</GlobalButton>
          </HashLink>
        </ButtonDiv>
    </Fade>
    </div>
    <Footer />
    </div>
  );
};

export default AboutHayley;
