import React, { Component } from 'react';

import linkedin_logo from '../images/linkedin.svg';
import github_logo from '../images/github-logo.svg';

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

  handleSubmit = (event : any) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id = "contact-section">
        <div className = "contact-container">
          <a target = "_blank" rel="noopener noreferrer" href = "index.html"><img alt = "linkedin" src = {linkedin_logo}/></a>
          <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/liamortiz"><img alt = "github" src = {github_logo}/></a>
        </div>
        <p>leamsii.e@gmail.com</p>
        <form id = "contact-section" onSubmit = {this.handleSubmit}>
          <label>Email</label>
          <input type = "email" name = "email" id = "email-input" />

          <textarea>
          </textarea>

          <button type = "submit">Submit</button>

        </form>
      </div>
    )
  }
}
export default Contact;
