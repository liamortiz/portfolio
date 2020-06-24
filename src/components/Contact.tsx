import React, { Component } from 'react';

import linkedin_logo from '../images/linkedin.svg';
import github_logo from '../images/github-logo.svg';

interface IContact {
  value : string
}

class Contact extends Component<{}, IContact> {
  constructor(props : any) {
    super(props);
    this.state = {
      value : ""
    }
  }

  handleSubmit = (event : any) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id = "contact-section">
        <div className = "contact-container">
          <p>I monitor my emails 24/7 in the hopes of seeing one from you. So if you feel I'm worthy please don't hesitate to contact me!</p>
          <a target = "_blank" rel="noopener noreferrer" href = "https://linkedin.com/in/leamsi-escribano-b1b642197/"><img className = "social-images" alt = "linkedin" src = {linkedin_logo}/></a>
          <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/liamortiz"><img className = "social-images" alt = "github" src = {github_logo}/></a>
        </div>
        <form onSubmit = {this.handleSubmit}>
          <input placeholder = "Name" type = "text" name = "name" id = "name-input" />
          <input placeholder = "Email address" type = "email" name = "email" id = "email-input" />
          <input placeholder = "Subject" type = "text" name = "subject" id = "subject-input" />
          <textarea placeholder = "This is a cool website, I will definitely send you an email!">
          </textarea>

          <button type = "submit">Send</button>
        </form>

      </div>
    )
  }
}
export default Contact;
