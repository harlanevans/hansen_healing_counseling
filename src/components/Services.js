import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { SubTitle } from "../Global";
import SImage from "../assets/images/Service-Lotus.jpg";
import { Fade } from "react-reveal";

class Services extends React.Component {
  render() {
    return (
      <div className="service-wrapper">
        <Grid textAlign="center">
          <Fade duration={3000}>
            <Grid.Row>
              <SubTitle style={{ fontSize: "2.5em" }}>Services</SubTitle>
            </Grid.Row>
          </Fade>
          <Grid.Row columns={2}>
            <Grid.Column style={{ padding: "3em" }} className='button-wrapper'>
          <Fade >
                {/* <div className="button-wrapper"> */}
                <div>
                  <NavLink to="/phase-two" className='service-link-window'>
                    <button className='service-button'>EMDR Phase Two Group</button>
                  </NavLink>
                </div>
              <NavLink to="/adult-yoga-group">
                    <button  className='service-button'>
                      Adult Yoga Group
                      </button>
                  </NavLink>
              <NavLink to="/youth-yoga-group">
                    <button className='service-button'>
                      Youth Yoga Group
                      </button>
                  </NavLink>
                {/* </div> */}
          </Fade>
            </Grid.Column>
            <Grid.Column style={{ padding: "3em" }}>
              <Fade>
                <img src={SImage} className="service-images" alt="services" />
              </Fade>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Services;
