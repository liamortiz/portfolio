import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

// TODO: send email
// TODO: Email validation
// TODO: Not a bot security check
// TODO: Auto Change active links when scrolling
// TODO: Fix Recaptcha
// TODO: Check cross browser compatibility

function App() {
  return (
    <div className="App">
      <Navigation />

      {/*The main header*/}
      <header id = "main-header">
        <h1>Leamsi Escribano</h1>
        <p>Full Stack Web <span>Developer</span></p>
        <div className = "intro-icon"></div>
        <small>Saving the world one byte at a time!</small>
      </header>

      <h2>.projects</h2>
      <Projects />

      <h2>.skills</h2>
      <Skills />

      <h2>.aboutme</h2>
      <About />

      <h2>.contact</h2>
      <Contact/>

      <footer>
        <p>Thank you for viewing my portfolio!</p>
      </footer>
    </div>
  );
}

export default App;
