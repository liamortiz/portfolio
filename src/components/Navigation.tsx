import React from 'react';

const Navigation : React.FC = () => {

  function scroll(element : any) : void {
    element.scrollIntoView({behavior : 'smooth', block : 'end'});
  }

  return (
    <nav>
      <ul>
        <li><div className = "active" onClick = {() => scroll(document.getElementById('main-header'))}>Home</div><span></span></li>
        <li><div onClick = {() => scroll(document.getElementById('project-section'))}>Projects</div><span></span></li>
        <li><div onClick = {() => scroll(document.getElementById('skills-section'))}>Skills</div><span></span></li>
        <li><div onClick = {() => scroll(document.getElementById('about-section'))}>About</div><span></span></li>
        <li><div onClick = {() => scroll(document.getElementById('main-header'))}>Contact</div><span></span></li>
      </ul>
    </nav>
  );
}
export default Navigation;
