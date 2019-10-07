import React from "react";
import Logo from '../../assets/icons/HLogoTransparent.png';
import MenuLogo from '../../assets/icons/Menu.svg'
import { HashLink } from "react-router-hash-link";
// import NavModal from "./NavModal";
// import { Fade } from "react-reveal";

const NavMobile = ({toggleModal}) => {
    return (
        <div className="main-nav-mobile">
          <HashLink to="/#home" smooth className='logo-cont'>
            <img src={Logo} alt='hlogo' className='logo-mob'/>
          </HashLink>
          <div className='drop-down' >
          <img
          src={MenuLogo}
          onClick={toggleModal}
          className='menu-mob-icon'
          />
            </div>
        </div>
    );
  }

export default NavMobile;
