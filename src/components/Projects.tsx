import React, { Component } from 'react';
import project_data from '../data/projects.json';

// Project preview images here
const IMAGES = [
  require("../images/dstpreview.png"),
  require('../images/book_corner.PNG'),
  require('../images/model_extractor.png'),
  require("../images/spotify_demo.png"),
  require('../images/portfolio.PNG')
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
  // Get a list of tools from json data
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
                <h3>{project.title}</h3>
                <div className = "project-details">
                  <img className = "project-img" src = {IMAGES[index]} alt = {project.title}/>

                  <div className = "project-description">
                    <p>{project.description}</p>
                  </div>

                  <div className = "project-buttons">
                    <a
                      target = "_blank"
                      rel="noopener noreferrer"
                      href = {project.code_href}>Code</a>
                    {
                      project.demo_href && <a target = "_blank" rel="noopener noreferrer" href = {project.demo_href}>Demo</a>
                    }
                  </div>

                </div>
                <ul className = "tools-list">
                  {this.get_tools(project)}
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Project;
