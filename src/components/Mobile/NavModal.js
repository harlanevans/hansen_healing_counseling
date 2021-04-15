import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { ModalButton } from "./Styles";
// import { Icon } from "semantic-ui-react";
import { Fade } from "react-reveal";
import Exit from '../../assets/icons/Exit.svg'

const NavModal = ({ showModal, toggleModal }) => {
  return showModal === true ? (
    // <div className={showModal ? "fadeIn-modal" : "fadeOut-modal"}>
    <div className="modal-main">
      <Fade>
        <div className="modal-column">
          <div className="icon-container">
            <div className="modal-icon">
            {/* Color is in svg Fill: 'white' and background color in modal-icon css */}
              <img src={Exit} onClick={toggleModal} className='exit-icon' alt='exit'/>
            </div>
          </div>
          <div className="modal-button-cont">
            <HashLink to="/#about" smooth>
              <ModalButton onClick={toggleModal}>About</ModalButton>
            </HashLink>
          </div>
          <div className="modal-button-cont">
            <HashLink to="/#services" smooth>
              <ModalButton onClick={toggleModal}>Services</ModalButton>
            </HashLink>
          </div>
          <div className="modal-button-cont">
            <HashLink to="/#contact" smooth>
              <ModalButton onClick={toggleModal}>Contact</ModalButton>
            </HashLink>
          </div>
          <div className="modal-button-cont">
            <HashLink to="/#home" smooth>
              <ModalButton onClick={toggleModal}>To Top</ModalButton>
            </HashLink>
          </div>
        </div>
      </Fade>
    </div>
  ) : (
    <></>
  );
};

export default NavModal;
