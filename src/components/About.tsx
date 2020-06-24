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
            off making <span>small 2D games</span> using a special language called DM from
            a website <a rel="noopener noreferrer" title = "Byond.com" target = "_blank" href = "http://www.byond.com/?__cf_chl_jschl_tk__=484e3c6cd150e8cad9c1e55bb802c2f20edce29e-1593019668-0-AXiYPUkuV4Fm-S1urSSKEd7MmDDx4Qgc7FNJf4CITbbdl7uYm6T5cQiWYLiLw3u0Rk8IezwdesePWz_0urUkjOUd3_7ArsAXzM1fJM0MwBAiOIdo6l-kPYydfylfRouiJRDai2UFdlJl-WaIh8hR7cu0vvR6ppTT_vULIEOr1zlyIizj1jEiVGTjf-KnTlOC2s_5nlQdvCF5EDKFTakRfGa9-x5AZYiEG6nxSTgV-JYZJME7LlkbsVlglLKPMyK7H-km4dQXok6xBUrLOiATYlqEqkIP0HMR5wbklBYFuY3tkvocLMbPn13xw712lnkHl02y3_FV_Jk2_0elj5Kgr-M">Byond.com</a>.
            At the time, that was all my computer could handle when it came to playing
            video games.
          </p>
          <p>
            I then moved over to using <span>Python</span> and made applications for random people on discord servers
            <a rel="noopener noreferrer" target = "_blank" title = "Github.com" href = "https://github.com/leamsii"> un-offical Github</a>. At the time I worked in the IT industry but my dream
            was always to become programmer.
          </p>
          <p>
            <span>After COVID-19</span> hit I was let go and decided now was the best time for me to do everything in my power to
            become a real developer and my dream come true. That's when I found <a rel="noopener noreferrer" target = "_blank" href ="https://flatironschool.com/">Flatiron School </a>
            and began sharpening my skills as a web developer.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;
