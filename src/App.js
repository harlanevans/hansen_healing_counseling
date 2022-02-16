import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Fade } from "react-reveal";

// IMPORTS
// Window Size
// import Landing from "./components/Landing";
import Window from "./components/Window/Window";
import AboutHayley from "./components/Window/AboutHayley";
import Services from './components/Window/Services';
import STBW from './components/services/STBW'
import Resources from "./components/services/Resources";
// import EMDR from "./components/services/EMDR";
// import OHYG from "./components/services/OHYG";
// import ServThree from "./components/services/ServeThree";

import NoMatch from './components/Window/NoMatch';
import NoMatchMobile from './components/Mobile/NoMatchMobile';

// Mobile Size
import Mobile from "./components/Mobile/Mobile";
import ContactMobile from "./components/Mobile/ContactMobile";
import AboutMobile from "./components/Mobile/AboutMobile";
import ServicesMobile from "./components/Mobile/ServicesMobile";
import STBWMobile from './components/Mobile/STBWMobile'
import ResourcesMobile from './components/Mobile/ResourcesMobile'
// import EMDRMobile from "./components/Mobile/EMDRMobile";
// import OHYGMobile from "./components/Mobile/OHYGMobile";
import AHayleyMobile from "./components/Mobile/AHayleyMobile";

// NAV IMPORTS
// import NavMobile from "./components/Mobile/NavMobile";
// import NavModal from "./components/Mobile/NavModal";


class App extends React.Component {
  state = { pageLoaded: false, width: window.innerWidth };

  componentDidMount = () => {
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
      return (

        <>
          <Switch>
            <Route exact path="/" component={Mobile} />
            <Route exact path="/contact" component={ContactMobile} />
            <Route exact path="/about" component={AboutMobile} />
            <Route exact path="/services" component={ServicesMobile} />
            <Route exact path='/about_hayley' component={AHayleyMobile} />
            <Route exact path="/somatic-touch-bodyworker" component={STBWMobile} />
            <Route exact path="/resources" component={ResourcesMobile} />
            {/* <Route exact path="/emdr" component={EMDRMobile} /> */}
            {/* <Route exact path="/organic-healing-yoga-group" component={OHYGMobile} /> */}
            <Route component={NoMatchMobile} />
          </Switch>
        </>
      )
    } else {
      return (

        <>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Window} />
            <Route exact path="/about_hayley" component={AboutHayley} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/somatic-touch-bodyworker" component={STBW} />
            <Route exact path="/resources" component={Resources} />
            {/* <Route exact path="/emdr" component={EMDR} /> */}
            {/* <Route exact path="/organic-healing-yoga-group" component={OHYG} /> */}
            <Route component={NoMatch} />
          </Switch>
        </>
      )
    }
  }
}

export default App;
