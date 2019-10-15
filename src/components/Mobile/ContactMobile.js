import React from "react";
// import axios from 'axios'
import { MobTitle, MobileButton, ButtonDivMob } from "./Styles";
// import { Form, } from "semantic-ui-react";
import { Fade } from "react-reveal";

class ContactMobile extends React.Component {
  state = { firstName: "", lastName: "", phone: "", email: "", questions: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const contact = { ...this.state }
    // axios.post('/api/contact', contact)
    // .then(res => {
    //   this.props.history.push("/#contact");
    // })
  };


  render() {
    const { firstName, lastName, phone, email, questions } = this.state;
    return (
      <div className="contact-wrapper">
        <Fade>
          <div className="mob-title" style={{ paddingBottom: "1em" }}>
            <MobTitle>Contact</MobTitle>
          </div>
        </Fade>
        <Fade duration={2000}>
          {/* Either my own form orrr */}
          {/* --------------------- */}
          <form className="contact-column-mobile" action="https://formspree.io/hayleyhansentherapy@gmail.com"
            method="POST">
            <input
              type="text"
              placeholder="First Name"
              className="input-style"
              required
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-style"
              required
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <input 
              type="tel"
              placeholder="Phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              className="input-style"
              required
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <div className="select-window">
              <label>How did you hear about us?</label>
              <select name="where" className="select-style">
                <option></option>
                <option value="friend" name="friend">
                  Friend
                </option>
                <option value="facebook" name="facebook">
                  FaceBook
                </option>
                <option value="google" name="google">
                  Google
                </option>
                <option value="professional" name="professional">
                  Professional
                </option>
                <option value="other" name="other">
                  Other
                </option>
              </select>
            </div>
            <label>Is there anything I should know before contacting you?</label>
            <textarea
              type="text"
              className="textarea-style-mobile"
              rows="1"
              cols="10"
              name="questions"
              value={questions}
              onChange={this.handleChange}
              wrap='hard'
            />
            <ButtonDivMob style={{padding: '1em 0em'}}>
              <MobileButton type="submit" className="contact-button">
                Lets Chat
              </MobileButton>
            </ButtonDivMob>
          </form>
        </Fade>
      </div>
    );
  }
}

export default ContactMobile;
