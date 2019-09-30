import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { ButtonMobile } from "./Styles";
import { Icon } from "semantic-ui-react";
import { Fade } from 'react-reveal';

const NavModal = ({ showModal, toggleModal }) => {
  return showModal === true ? (
    // <div className={showModal ? "fadeIn-modal" : "fadeOut-modal"}>
    <Fade>

    <div className="modal-main">
      <div className="modal-column">
        <div className="icon-container">
          <div className="modal-icon">
            <Icon
              name="cancel"
              size="big"
              onClick={toggleModal}
              style={{ color: "#1D4C4B" }}
            />
          </div>
        </div>
        <HashLink to="/#about" className="modal-button" smooth>
          <ButtonMobile onClick={toggleModal}>About</ButtonMobile>
        </HashLink>
        <HashLink to="/#services" className="modal-button" smooth>
          <ButtonMobile onClick={toggleModal}>Services</ButtonMobile>
        </HashLink>
        <HashLink to="/#contact" className="modal-button" smooth>
          <ButtonMobile onClick={toggleModal}>Contact</ButtonMobile>
        </HashLink>
        <HashLink to="/#home" className="modal-button" smooth>
          <ButtonMobile onClick={toggleModal}>To Top</ButtonMobile>
        </HashLink>
      </div>
    </div>
              </Fade>
  ) : (
    <></>
  );
};

export default NavModal;
