import React, { Component } from 'react';

// TODO: Include a short description of the project
// TODO: Include used languages and tools
// TODO: Add gif as sample images
// TODO: Improve button effects
// TODO: Find better color palete

class Project extends Component {
  render() {
    return (
      <div id = "project-section">
        <h2>Projects</h2>

        <div className = "project-container">
          <div className = "project-box">
            <h4>DST Lookup Tool</h4>
            <div className = "project-img"></div>
            <a href = "" target = "_bank">Demo</a>
            <a href = "" target = "_blank">Code</a>
          </div>
          <div className = "project-box">
            <h4>Dillopass</h4>
            <div className = "project-img"></div>
            <a href = "" target = "_bank">Demo</a>
            <a href = "" target = "_blank">Code</a>
          </div>
          <div className = "project-box">
            <h4>Greenpaws</h4>
            <div className = "project-img"></div>
            <a href = "" target = "_bank">Demo</a>
            <a href = "" target = "_blank">Code</a>
          </div>
          <div className = "project-box">
            <h4>Untitled</h4>
            <div className = "project-img"></div>
            <a href = "" target = "_bank">Demo</a>
            <a href = "" target = "_blank">Code</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Project;
