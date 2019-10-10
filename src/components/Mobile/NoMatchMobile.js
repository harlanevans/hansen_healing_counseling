import React from "react";
import { MobTitle, ButtonDivMob, MobileButton } from "./Styles";
import { HashLink } from "react-router-hash-link";
import Nav from "./NavMobile";
import Footer from "./FooterMobile";
import BCINo from "../../assets/images/NoCactus.jpg";

const NoMatch = () => {
  return (
    <div>

      <Nav />
      <div className='no-match-bg'>

        <div style={styles.rowOne}>
          <MobTitle>Uh oh.</MobTitle>
        </div>
        <div style={styles.row}>
          <MobTitle>Looks like we have a wrong url here.</MobTitle>
        </div>

        <ButtonDivMob>
          <HashLink to="/">
            <MobileButton>Home</MobileButton>
          </HashLink>
        </ButtonDivMob>
        <div style={styles.row}>
          <MobTitle>Let's try again</MobTitle>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default NoMatch;

const styles = {
  rowOne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "5em 2em 0em"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "2em 2em",
    textAlign: 'center'
  },
  cont: {
    height: "100%",
  },
  background: {
    height: "100%",
    width: ' 100%',
    backgroundImage: `url(${BCINo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};