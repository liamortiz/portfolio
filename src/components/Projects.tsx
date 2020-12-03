import React, { Component } from 'react';
import project_data from '../data/projects.json';

const IMAGES = [
  require("../images/greenpaws.png"),
  require("../images/algi.gif"),
  require("../images/model_extractor.png"),
  require("../images/dstpreview.gif"),
  require('../images/book_corner.PNG'),
  require("../images/spotify_demo.png"),
  require('../images/portfolio.PNG')
]

class Project extends Component {
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
                    {
                    (project.title === 'Book Corner' || project.title === "Green Paws eCommerce") && 
                    <p className = "warning">
                      Warning: Heroku unloads the website. Expect small delay.
                    </p>
                    }
                    <p>{project.description}</p>
                  </div>

                  <div className = "project-buttons">
                    <a
                      target = "_blank"
                      rel="noopener noreferrer"
                      href = {project.code_href}>Code</a>
                    {
                      project.demo_href && 
                      <a target = "_blank" rel="noopener noreferrer" href = {project.demo_href}>Demo</a>
                    }
                  </div>

                </div>
                <ul className = "tools-list">
                  {
                    project.tools.map((tool, index) => <li key = {index} className = "tool">{tool}</li>)
                  }
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
