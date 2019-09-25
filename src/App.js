import React from "react";
import { Switch, Route } from "react-router-dom";
import { Fade } from "react-reveal";

// IMPORTS
// Window Size
// import Nav from "./components/Nav";
// import Landing from "./components/Landing";
import Loader from "./components/Loader";
import Window from "./components/Window";
import AboutHayley from "./components/AboutHayley";
import Services from './components/Services';
import EMDR from "./components/services/EMDR";
import OHYG from "./components/services/OHYG";
import ServThree from "./components/services/ServeThree";

// Mobile Size
import Mobile from "./components/Mobile/Mobile";
import ContactMobile from "./components/Mobile/ContactMobile";
import AboutMobile from "./components/Mobile/AboutMobile";
import ServicesMobile from "./components/Mobile/ServicesMobile";
import YouthYoga from "./components/Mobile/YouthYoga";
import AdultYoga from "./components/Mobile/AdultYoga";

class App extends React.Component {
  state = { pageLoaded: false, width: window.innerWidth };

  componentDidMount = () => {
    setTimeout(() => {
      setTimeout(() => {
        this.setState({ pageLoaded: !this.state.pageLoaded });
      }, 2000);
    }, 4000);
    window.addEventListener("resize", this.handleWindowSizeChange);
  };

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    // the rest is the same...
    if (isMobile) {
      return this.state.pageLoaded === false ? (
        <Loader />
      ) : (
        <>
          <Fade>
            <Switch>
              <Route exact path="/" component={Mobile} />
              <Route exact path="/contact" component={ContactMobile} />
              <Route exact path="/about" component={AboutMobile} />
              <Route exact path="/services" component={ServicesMobile} />
              <Route exact path="/adult-yoga-group" component={AdultYoga} />
              <Route exact path="/youth-yoga-group" component={YouthYoga} />
            </Switch>
          </Fade>
        </>
      );
    } else {
      return this.state.pageLoaded === false ? (
        <Loader />
      ) : (
        <>
          {/* <Nav /> */}
          <Fade>
            <Switch>
              <Route exact path="/" component={Window} />
              <Route exact path="/about_hayley" component={AboutHayley} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/emdr" component={EMDR} />
                <Route exact path="/organic-healing-yoga-group" component={OHYG} />
            </Switch>
          </Fade>
        </>
      );
    }
  }
}

export default App;
