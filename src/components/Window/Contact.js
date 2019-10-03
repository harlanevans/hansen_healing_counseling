import React from "react";
import axios from "axios";
import { Fade } from "react-reveal";
import { CompTitle, GlobalButton, ButtonDiv } from "./Global";

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    questions: "",
    where: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = { ...this.state };

    axios.post("/api/contact", contact).then(res => {
      this.props.history.push("/#contact");
    });
  };

  render() {
    const { firstName, lastName, phone, email, questions } = this.state;
    // const { name } = this.state;
    return (
      <div className="contact-form-wrapper">
        <div className="contact-title">
          <Fade duration={2000} top>
            <CompTitle>Contact</CompTitle>
          </Fade>
        </div>
        <Fade duration={3000}>
          <form
            className="contact-column-window"
            action="https://formspree.io/hayleyhansentherapy@gmail.com"
            method="POST"
          >
            <input
              type="text"
              placeholder="First Name"
              className="input-style-window"
              required
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input-style-window"
              required
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <input
              type="tel"
              placeholder="Phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              className="input-style-window"
              required
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style-window"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <div className="select-window">
              <label>How did you hear about me?</label>
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
            <textarea
              type="text"
              placeholder="Anything I should know before contacting you?"
              className="textarea-style-window"
              required
              rows="4"
              cols="50"
              name="questions"
              value={questions}
              onChange={this.handleChange}
            />
            <ButtonDiv style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <GlobalButton type="submit" className="contact-button">
                Lets Chat
              </GlobalButton>
            </ButtonDiv>
          </form>
        </Fade>
      </div>
    );
  }
}

export default Contact;
