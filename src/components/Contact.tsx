import React, { Component } from 'react';

import linkedin_logo from '../images/linkedin.svg';
import github_logo from '../images/github-logo.svg';
import email_icon from '../images/email.svg';

interface IContact {
  value : string
}
// TODO: Add real hrefs
class Contact extends Component<{}, IContact> {
  constructor(props : any) {
    super(props);
    this.state = {
      value : ""
    }
  }

  handleInputClick= (event : any) => {
    event.target.value = "";
  }

  handleSubmit = (event : any) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id = "contact-section">
        <img className = "email-icon" src = {email_icon} alt = "send email"/>
        <form onSubmit = {this.handleSubmit}>
          <input onClick = {this.handleInputClick} value = "Name" type = "text" name = "name" id = "name-input" />
          <input onClick = {this.handleInputClick} value = "Email address" type = "email" name = "email" id = "email-input" />
          <input onClick = {this.handleInputClick} value = "Subject" type = "text" name = "subject" id = "subject-input" />
          <textarea>
          </textarea>

          <button type = "submit">Send</button>
        </form>
        <div className = "contact-container">
          <p>I'm Also On</p>
          <a target = "_blank" rel="noopener noreferrer" href = "https://linkedin.com/in/leamsi-escribano-b1b642197/"><img className = "social-images" alt = "linkedin" src = {linkedin_logo}/></a>
          <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/liamortiz"><img className = "social-images" alt = "github" src = {github_logo}/></a>
        </div>
      </div>
    )
  }
}
export default Contact;
