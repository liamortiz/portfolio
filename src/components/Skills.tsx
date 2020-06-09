import React from 'react';

const Skills : React.FC = () => {
  return (
    <div id = "skills-section">
      <ul>
        <li><img src = {require('../images/skills-icons/html5_icon.svg')} alt = "HTML"/><span>HTML</span></li>
        <li><img src = {require('../images/skills-icons/sass_icon.svg')} alt = "CSS"/><span>CSS/SASS</span></li>
        <li><img src = {require('../images/skills-icons/js_icon.svg')} alt = "Javascript"/><span>Javascript</span></li>
        <li><img src = {require('../images/skills-icons/typescript.svg')} alt = "Typescript"/><span>Typescript</span></li>
        <li><img src = {require('../images/skills-icons/react_icon.svg')} alt = "React"/><span>React</span></li>
        <li><img src = {require('../images/skills-icons/node_icon.svg')} alt = "Node"/><span>Node</span></li>
        <li><img src = {require('../images/skills-icons/mongodb.png')} alt = "Mongodb"/><span>Mongodb</span></li>

        <li><img src = {require('../images/skills-icons/ruby_icon.svg')} alt = "Ruby"/><span>Ruby</span></li>
        <li><img src = {require('../images/skills-icons/rails_icon.svg')} alt = "Rails"/><span>Rails</span></li>
        <li><img src = {require('../images/skills-icons/python_icon.svg')} alt = "Python"/><span>Python</span></li>
        <li><img src = {require('../images/skills-icons/git.svg')} alt = "Git"/><span>Git</span></li>
      </ul>
    </div>
  )
}
export default Skills;
