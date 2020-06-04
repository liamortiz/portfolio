import React from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />

      {/*The main header*/}
      <header>
        <h1>Leamsi Escribano</h1>
        <p>Full Stack Web <span>Developer</span></p>
        <div className = "monitor-icon"></div>
      </header>
            
      {/*Project Section */}
      <Projects />

    </div>
  );
}

export default App;

/*
Portfolio Specs-----------
SVG Icons !
Cool effects
Minimal
Fast
Lite colors


Pages ---
Home -> Top of page.
Projects -> Contains at least 4 projects with demo and code links
Skills -> Contains tools and languages
About -> Short description of your journey
Contact -> Github account Email Phone and LinkedIn

-> The intro page should contain the Navigation,
Your full name, job title,

*/
