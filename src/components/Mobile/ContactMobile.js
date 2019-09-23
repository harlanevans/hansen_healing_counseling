import React from "react";
// import axios from 'axios'
import { SubTitleContact } from "./Styles";
// import { Form, } from "semantic-ui-react";
import { Fade } from 'react-reveal';

class ContactMobile extends React.Component {
  state = {firstName: '', lastName: '', phone: '', email: '', questions: ''}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const contact = { ...this.state }
    // axios.post('/api/contact', contact)
      // .then(res => {
      //   this.props.history.push("/#contact");
      // })
  }

  render() {
    const { firstName, lastName, phone, email, questions } = this.state;
    return (
      <div className='contact-wrapper'>
        <SubTitleContact>Contact</SubTitleContact>
        <Fade>

        {/* Either my own form orrr */}
        {/* --------------------- */}
        <form className='contact-column-mobile'>
          <input 
          type='text' 
          placeholder="First Name"
          className='input-style' 
          required 
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          />
          <input 
          type='text' 
          placeholder="Last Name" 
          className='input-style' 
          required
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
          />
          <input 
          type='tel' 
          placeholder="Phone" 
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
          className='input-style' 
          required
          name="phone"
          value={phone}
          onChange={this.handleChange}
          />
          <input 
          type='email' 
          placeholder="Email" 
          className='input-style' 
          required
          name="email"
          value={email}
          onChange={this.handleChange}
          />
            <div className="select-window">
              <label>How did you hear about us?</label>
              <select name="where" className="select-style">
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
          type='text' 
          placeholder="Is there anything I should know before contacting you?" 
          className='textarea-style-mobile' 
          required
          rows='3'
          name="questions"
          value={questions}
          onChange={this.handleChange}
          />
          <div className='button'>
              <button type='submit' className='contact-button'>Lets Chat</button>
              </div>
        </form>
      </Fade>
        {/* Semantic-form ? */}
            {/* <Form>
              <Form.Input
                label="First Name"
                className="label"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Last Name"
                className="label"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Phone"
                type="phone"
                className="label"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                type="email"
                className="label"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="Questions?"
                className="label"
                name="questions"
                value={questions}
                onChange={this.handleChange}
              />
              <div className='button'>
              <button className='contact-button'>Lets Chat</button>
              </div>
            </Form> */}
      </div>
    );
  }
}

export default ContactMobile;
