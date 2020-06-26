import React, { Component } from 'react';
import project_data from '../data/projects.json';

// Project preview images here
const IMAGES = [
  require("../images/dstpreview.png"),
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

  componentDidMount = () : void => {
    // Makes the first project visible
    let show_element = document.getElementsByClassName('project-details')[0];
    show_element.classList.remove("hidden")
  }

  expand_project = (event : any) : void => {
    // Get the parent node of the button
    let button_element : any | null = document.getElementById(event.target.id);
    let parent = button_element.parentNode;
    parent = parent.children[1];

    let is_hidden = parent.classList.contains("hidden");

    // Handle animations
    if (is_hidden) {
      parent.setAttribute("style", "max-height: 900px");
    } else {
      parent.setAttribute("style", "max-height: 0");
    }
    parent.classList.toggle("hidden");

    // Arrow animation
    let alter_animation = !is_hidden ? "animation: .5s ease-in-out infinite alternate hover" : "animation: none";
    let alter_direction = !is_hidden ? "transform: rotate(0)" : "transform: rotate(180deg); animation: none";
    //button_element.style.transform = transform;
    button_element.setAttribute("style", alter_animation);
    button_element.setAttribute("style", alter_direction);
  }
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
                <div className = "project-details hidden">
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
                {index !== 0 &&
                  <button id = {project.title} onClick = {this.expand_project}></button>}
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Project;
