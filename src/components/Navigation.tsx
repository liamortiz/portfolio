import React from 'react';

const Navigation : React.FC = () => {

  function scroll(event : any, element : any) : void {
    // Remove current active link
    document.getElementsByClassName("active")[0].classList.remove("active");
    // Update active link
    event.target.classList.add("active");
    // Scroll
    element.scrollIntoView({behavior : 'smooth', block : 'start'});
  }

  return (
    <nav>
      <ul>
        <li><div className = "active" onClick = {(e) => scroll(e, document.getElementById('main-header'))}>Home</div><span></span></li>
        <li><div onClick = {(e) => scroll(e, document.getElementById('project-section'))}>Projects</div><span></span></li>
        <li><div onClick = {(e) => scroll(e, document.getElementById('skills-section'))}>Skills</div><span></span></li>
        <li><div onClick = {(e) => scroll(e, document.getElementById('about-section'))}>About</div><span></span></li>
        <li><div onClick = {(e) => scroll(e, document.getElementById('contact-section'))}>Contact</div><span></span></li>
      </ul>
    </nav>
  );
}
export default Navigation;
