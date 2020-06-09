import React, { Component } from 'react';

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

  render() {
    return (
      <form id = "contact-section">
        <label>Email</label>
        <input type = "email" name = "email" id = "email-input" />

        <textarea>
        </textarea>

        <button type = "submit">Submit</button>

      </form>
    )
  }
}
export default Contact;
