import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import emailjs from 'emailjs-com';

import linkedin_logo from '../images/linkedin.svg';
import github_logo from '../images/github-logo.svg';

interface IContact {
  [propName: string] : any;
}
class Contact extends Component<{}, IContact> {
  constructor(props : any) {
    super(props);
    this.state = {
      verified: false
    }
  }
  handleSubmit = (event : any) => {
    event.preventDefault();
    // Sometimes the callback fails
    let captcha_element : any | null = document.getElementById("g-recaptcha-response");

    if (this.state.verified || captcha_element.value.length !== 0) {
      emailjs.sendForm('default_service', "template_AzDMR8bG", event.target, 'USER-ID')
      .then((result) => {
        this.handleSentEmail("OK")
      }, (error) => {
        this.handleSentEmail("404")
        console.log(error.text);
      });
    }
  }

  handleSentEmail(status_code : string) : void {
    let notice_elm : any | null = document.getElementById("notice");
    notice_elm.setAttribute("style", "display: inline-block");
    if (status_code === "OK") {
      notice_elm.innerHTML = "Email Sent!";
      notice_elm.classList.add("success");
    } else {
      notice_elm.classList.add("error");
      notice_elm.innerHTML = "Sorry something wen't wrong :(";
    }

    // Reset the form
    let form : any | null = document.getElementById("contact-form");
    form.reset()
  }

  handleChange = (event : any)=> {
    // Sets email, name, subject, message
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onVerify = () => {
    console.log("Verified");
    this.setState({verified: true})
  }
  render() {
    return (
      <div id = "contact-section">
        <div className = "contact-container">
          <p>You've made it to the end of my portfolio! Thank you for sticking around. Please feel free to send me an email!</p>
          <a target = "_blank" rel="noopener noreferrer" href = "https://linkedin.com/in/leamsi-escribano-b1b642197/"><img className = "social-images" alt = "linkedin" src = {linkedin_logo}/></a>
          <a target = "_blank" rel="noopener noreferrer" href = "https://github.com/liamortiz"><img className = "social-images" alt = "github" src = {github_logo}/></a>
        </div>

        <p id = "notice">
          Email Sent!
        </p>

        <form id = "contact-form" onSubmit = {this.handleSubmit}>
          <input onChange = {this.handleChange} placeholder = "Name" type = "text" name = "user_name" id = "name-input" required/>
          <input onChange = {this.handleChange} placeholder = "Email address" type = "email" name = "user_email" id = "email-input" required/>
          <input onChange = {this.handleChange} placeholder = "Subject" type = "text" name = "subject" id = "subject-input" required />
          <textarea onChange = {this.handleChange} name = "message" required>
          </textarea>

          <button type = "submit">Send</button>
        </form>

        <div className = "recaptcha">
          <Recaptcha sitekey="6LdcA6oZAAAAAIEoz5BWgM6RTysCy0eiJ63Psu52"
          render="explicit"
          theme = "dark"
          verifyCallback = {this.onVerify}
          />
        </div>

      </div>
    )
  }
}
export default Contact;
