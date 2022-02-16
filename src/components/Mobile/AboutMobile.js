import React from "react";
import { MobTitle, MobText, MobileButton, ButtonDivMob } from "./Styles";
// import Hayley from "../../assets/images/HMeditate.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
// import { Grid } from "semantic-ui-react";

const AboutMobile = () => {
  return (
    <div className="about-mob-container">
      <Fade duration={2000} top>
        <div className="mob-title">
          <MobTitle>About Hayley</MobTitle>
        </div>
      </Fade>
      <Fade duration={2000}>
        <MobText className="mob-abt-text">
          We are here to feel really good in our bodies, to feel really safe and connected in relationship. We are here to feel alive! Your body is designed to explore Earth and experience all the wonder and bliss.
          Maybe post pandemic you are feeling sick or sad. Maybe it started before that.
          Maybe you have survived an injury, of the body or the heart.
          I don't know what you are doing to survive, but you have done a wonderful job keeping yourself safe. Everyone is doing the best they can, and you are doing a great job.
        </MobText>
      </Fade>
      <Fade duration={2000} bottom>
        <ButtonDivMob>
          <Link to="/about_hayley">
            <MobileButton>
              More About Hayley
            </MobileButton>
          </Link>
        </ButtonDivMob>
      </Fade>
    </div>
  );
};

export default AboutMobile;
