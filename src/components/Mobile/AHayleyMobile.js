import React from "react";
import { MobTitle, MobText, MobileLandingText, ButtonDivMob, MobileButton } from "./Styles";
import Hayley from "../../assets/images/HMeditate.jpg";
import { HashLink} from 'react-router-hash-link';
import MobileNav from "./NavMobile";
import Footer from "./FooterMobile";

const AHayleyMobile = () => {
  return (
    <div>
      <MobileNav />
      <div className="habout-cont">
        <div>
          <img src={Hayley} className="habout-image" />
        </div>
        <MobTitle style={{ textAlign: "center", paddingTop: "1em" }}>
          Meet Hayley
        </MobTitle>
        {/* <div className="habout-text-cont"> */}
        <div className="habout-box-one">
          <MobText>
            With my academic career starting in 2007, I received a Bachelors of
            Science in Psychology and Family Consumer Human Development from
            Utah State University. I preceded to graduate from Arizona State
            University with my Masters in Counseling in 2013, and have been
            practicing the art of healing since.
          </MobText>
        </div>
        <div className="habout-box-two">
          <MobText>
            In my fifth year of practice, I received my 200 level Registered
            Yoga Teacher (RYT) certificate in 2018. I am also trained in EMDR,
            Mindfulness Based Stress Reduction, and Dialectical Behavioral
            Therapy (DBT).
          </MobText>
        </div>
        <div className="habout-box-three">
          <MobText>
            I don't think talk therapy is always the best route for everyone.
            Sometimes a person needs to <b className="landing-m-b-two">move.</b>{" "}
            A person needs actual{" "}
            <b className="landing-m-b-two">
              <i>practice</i>
            </b>{" "}
            using skills will help them, so when they are outside of group, they
            know in their bones what to do when they are in distress. I know
            that our bodies have more wisdom and natural ability to heal on
            their own than we think, <i>especially </i>in the realm of emotional
            and mental healing.{" "}
            <b className="landing-m-b-two">
              We need to give these amazing bodies of ours the space to do so.
            </b>
          </MobText>
        </div>
        <hr />
        <div className="ps-habout">
          <MobileLandingText>
            P.S. I’ve given you the clinical stuff. Now I’ll give you the dirt.
          </MobileLandingText>
        </div>
        <MobText>

        <ul className='habout-list'>
          <li className='hlist'>
            I’ve been obsessed with mindful movement ever since I could
            walk—climbing trees, playing sports, trail running, swimming,
            lifting, and now moving and breathing Yoga.
          </li>
          <li className='hlist'>
            I was sorted into Hufflepuff, wish I could major in Herbology, and
            often ask myself “What Would Dumbledore Do”?
          </li>
          <li className='hlist'>
            Recently, I’m crazy about the ocean. We haven’t explored all the
            mystery in there, so obviously I believe in mermaids.
          </li>
          <li className='hlist'>
          Phoebe from Friends is my spirit animal. </li>
          <li className='hlist'>
            My favorite yoga pose is either Happy Baby or Tree Pose. I’m tied
            because I love babies and trees with all my heart!
          </li>
          <li className='hlist'>
            Brutus and Kiko are my two dogs and absolute favorite souls to be
            around.
          </li>
          <li className='hlist'>
            My favorite fleeting scent that can never be captured is the
            Creosote Bush after it rains. If you rub the leaves together, it
            smells like Phoenix after a good rain.
          </li>
          <li className='hlist'>
            {" "}
            I have personally experienced body centered healing, and it has
            changed my life.{" "}
          </li>
        </ul>
        </MobText>
        <ButtonDivMob style={{padding: '1em'}}>
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
