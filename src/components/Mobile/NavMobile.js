import React from "react";
import { Icon } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";
// import NavModal from "./NavModal";
// import { Fade } from "react-reveal";

const NavMobile = ({toggleModal}) => {
    return (
        <div className="main-nav-mobile">
          <HashLink to="/#home" smooth>
            <Icon name="leaf" className="leaf-icon" size="large" />
          </HashLink>
          <Icon
            name="bars"
            className="drop-down"
            size="large"
            onClick={toggleModal}
            style={{ color: "white" }}
          />
        </div>
    );
  }

export default NavMobile;
