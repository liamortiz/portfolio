import React, { Component } from 'react';
import project_data from '../data/projects.json';

// Project preview images here
const IMAGES = [
  require("../images/dstpreview.png"),
  require("../images/spotify_demo.png")
]

// Project Interface from JSON file
interface IProjectObject {
  title : string;
  description : string;
  tools : string[];
  demo_href : string;
  code_href : string;
}

class Project extends Component {

  // Get a list of tools
  get_tools(project : IProjectObject) {
    return (
      project.tools.map((tool, index) => {
        return (
          <li key = {index} className = "tool">{tool}</li>
        )
      })
    );
  }

  render() {
    return (
      <div id = "project-section">
        {
          project_data.map((project, index) => {
            return (
              <div className = "project-container" key = {index}>

              <img className = "project-img" src = {IMAGES[index]} alt = {project.title}/>

              <div className = "project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className = "tools-list">
                  {this.get_tools(project)}
                </ul>
              </div>

              <div className = "project-buttons">
                <a target = "_blank" rel="noopener noreferrer" href = {project.code_href}>Code</a>
                <a target = "_blank" rel="noopener noreferrer" href = {project.demo_href}>Demo</a>
              </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Project;
