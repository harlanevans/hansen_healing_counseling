import React from "react";
import { Icon } from 'semantic-ui-react';
import Logo from '../../assets/images/HLogoTransparent.png';
import { HashLink } from "react-router-hash-link";
// import NavModal from "./NavModal";
// import { Fade } from "react-reveal";

const NavMobile = ({toggleModal}) => {
    return (
        <div className="main-nav-mobile">
          <HashLink to="/#home" smooth className='logo-mob'>
            <img src={Logo} alt='hlogo'/>
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
