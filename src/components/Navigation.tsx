import React from 'react';
const Navigation : React.FC = () => {

  function scroll(event : any, element : Element | null) : void {
    if (element && event) {
      document.getElementsByClassName("active")[0].classList.remove("active");
      event.target.classList.add("active");
      element.scrollIntoView({behavior : 'smooth', block : 'start'});
    }
  }

  function expandNav() : void {
    const navigationElement : Element | null = document.getElementById("navbar");
    if (navigationElement) {
      navigationElement.classList.toggle("hidden");
    }
  }
  return (
    <nav>
      <button className = "mobile-nav" onClick = {expandNav}></button>
      <ul id = "navbar">
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
