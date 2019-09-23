import React from "react";
import { Icon } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";
import NavModal from "./NavModal";
import { Fade } from 'react-reveal';

class NavMobile extends React.Component {
  state = { showModal: false };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    // console.log("clicked");
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <div className="main-nav-mobile">
            <HashLink to="/#home" smooth>
              <Icon name="leaf" className="leaf-icon" size="large" />
            </HashLink>
              <Icon
                name="bars"
                className="drop-down"
                size="large"
                onClick={this.toggleModal}
                style={{ color: "white" }}
              />
        </div>
        <Fade duration={3000} delay={200}>
          <div className={showModal ? 'fadeIn-modal' : 'fadeOut-modal'}>
        <NavModal showModal={showModal} toggleModal={this.toggleModal} />
        </div>
        </Fade>
      </div>
    );
  }
}

export default NavMobile;
