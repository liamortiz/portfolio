import React, { Component } from 'react';
import DSTPreviewImage from '../images/dstpreview.png';

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
            <div className = "project-description">
              <h3>Recipe Look Up</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis id pellentesque vestibulum,
                ipsum lorem tincidunt lacus, nec interdum felis sem vitae ex. Vestibulum tempus eros sit amet urna tempor,
                ac sollicitudin metus interdum. Aenean scelerisque gravida fringilla.
               </p>
               <h4>Tools</h4>
               <ul className = "tools-list">
                <li>React</li>
                <li>CSS + SASS</li>
                <li>HTML5</li>
               </ul>
               <div className = "project-buttons">
                 <a href = "">Demo</a>
                 <a href = "">Code</a>
               </div>

            </div>
            <img src  = {DSTPreviewImage} className = "project-img" />
          </div>
        </div>
      </div>
    )
  }
}
export default Project;
