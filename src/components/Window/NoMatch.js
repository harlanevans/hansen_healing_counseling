import React from "react";
import { CompTitle, ButtonDiv, GlobalButton } from "./Global";
import { HashLink } from "react-router-hash-link";
import Nav from "./Nav";
import Footer from "./Footer";
import BCINo from "../../assets/images/NoCactus.jpg";

const NoMatch = () => {
  return (
    <div>

      <Nav />
    <div className='no-match-bg'>

      <div style={styles.rowOne}>
        <CompTitle>Uh oh.</CompTitle>
      </div>
      <div style={styles.row}>
        <CompTitle>Looks like we have a wrong url here.</CompTitle>
      </div>

      <ButtonDiv>
        <HashLink to="/">
          <GlobalButton>Home</GlobalButton>
        </HashLink>
      </ButtonDiv>
      <div style={styles.row}>
        <CompTitle>Let's try again</CompTitle>
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
    padding: "4em 5em 0em"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "0em 5em"
  },
  cont: {
    height: "100%",
  },
  background: {
    height: "100%",
    width:' 100%',
    backgroundImage: `url(${BCINo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};
