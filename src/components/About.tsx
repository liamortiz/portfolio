import React from 'react';

const About : React.FC = () => {
  return (
    <div id = "about-section">
      <div className = "about-container">

        <div className = "image-container">
          <div className = "hero"></div>
        </div>

        <div className = "description">
          <h3>Hi I'm Liam</h3>
          <p>
            I've been programming for a few years now, on and off. I started
            making <span>2D games</span> using a language called Dream Deamon when I was in High School.
          </p>
          <p>
            I then started using <span>Python</span> and made cool applications for people on discord servers <a rel="noopener noreferrer" target = "_blank" title = "Github.com" href = "https://github.com/leamsii"> 
            un-offical Github</a>. At the time, I worked in IT but my dream
            was always to become a developer.
          </p>
          <p>
            I eventually decided to join <span>Flatiron School</span> and become a Software Engineer.
            I finished their intensive program and officially started my Software Engineering career.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;
