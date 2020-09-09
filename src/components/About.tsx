import React from 'react';

const About : React.FC = () => {
  return (
    <div id = "about-section">
      <div className = "about-container">

        <div className = "image-container">
          <div className = "hero"></div>
        </div>

        <div className = "description">
          <h3>My name is Leamsi Escribano</h3>
          <p>
            I've been programming for about 8 years now on and off. I started
            making <span>2D games</span> using a language called Dream Deamon.
          </p>
          <p>
            I then moved over to using <span>Python</span> and made applications for people on discord servers
            <a rel="noopener noreferrer" target = "_blank" title = "Github.com" href = "https://github.com/leamsii"> un-offical Github</a>. At the time I worked in the IT industry but my dream
            was always to become a developer.
          </p>
          <p>
            <span>After COVID-19</span> I was let go and decided now was the best time for me to do everything in my power to
            become a developer. That's when I found <a rel="noopener noreferrer" target = "_blank" href ="https://flatironschool.com/">Flatiron School </a>
            and began sharpening my skills as a web developer.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;
