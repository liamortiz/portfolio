import React from 'react';

const Skills : React.FC = () => {
  return (
    <div id = "skills-section">
      <ul>
        <li><img src = {require('../images/skills-icons/html5_icon.svg')} /><span>HTML</span></li>
        <li><img src = {require('../images/skills-icons/sass_icon.svg')} /><span>CSS/SASS</span></li>
        <li><img src = {require('../images/skills-icons/js_icon.svg')} /><span>Javascript</span></li>
        <li><img src = {require('../images/skills-icons/react_icon.svg')} /><span>React</span></li>
        <li><img src = {require('../images/skills-icons/node_icon.svg')} /><span>Node</span></li>

        <li><img src = {require('../images/skills-icons/ruby_icon.svg')} /><span>Ruby</span></li>
        <li><img src = {require('../images/skills-icons/rails_icon.svg')} /><span>Rails</span></li>
        <li><img src = {require('../images/skills-icons/python_icon.svg')} /><span>Python</span></li>
        <li><img src = {require('../images/skills-icons/git.svg')} /><span>Git</span></li>
      </ul>
    </div>
  )
}
export default Skills;
