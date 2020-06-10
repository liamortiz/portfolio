import React, { Component } from 'react';
import project_data from '../data/projects.json';

// TODO: Make this a gallery
// TODO: Create an animation effect when switching between projects
// TODO: Add buttons to the gallery

// Project preview images here
const IMAGES = [
  require("../images/dstpreview.png"),
  require("../images/dillo.png")
]


// Create the interface for the state of the project class
interface IState {
  current_page : number
}
class Project extends Component<{}, IState> {

  constructor(props : object) {
    super(props);
    this.state = {
      current_page : 0
    };
  }

  handleClick = (event : any) : void => {
    let class_name : string = event.target.className;
    let page : number = 0;

    // Change the current project being viewed
    if (class_name === "right") {
      page = this.state.current_page + 1
    } else if (class_name === "left") {
      page = this.state.current_page - 1
    }

    // Validation
    if (page < 0) page = 0
    if (page > project_data.length - 1) page = project_data.length - 1

    this.setState({current_page : page})

  }

  render() {
    return (
      <div id = "project-section">
        <div className = "project-container">
          <div className = "project-box">
            <div className = "project-description">
              <h3>{project_data[this.state.current_page].title}</h3>
              <p>{project_data[this.state.current_page].description}</p>

              <h4>Tools</h4>
              <ul className = "tools-list">
              {
                project_data[this.state.current_page].tools.map((tool, index) =>
                  <li key = {index}>{tool}</li>)
              }
              </ul>

              <div className = "project-buttons">
                <a target = "_blank" rel="noopener noreferrer" href = {project_data[this.state.current_page].demo_href}>Demo</a>
                <a target = "_blank" rel="noopener noreferrer" href = {project_data[this.state.current_page].code_href}>Code</a>
              </div>

            </div>
            <img src = {IMAGES[this.state.current_page]} className = "project-img" alt = "Project Preview"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Project;
