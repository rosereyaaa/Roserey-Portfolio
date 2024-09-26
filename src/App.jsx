import React from 'react';
import './App.css'

// Initialization of pages 
import Navbars from './components/navigation/navbar'
import HeaderSection from './components/aboutMe/header';
import Projects from './components/projects/projectSection';
import TechnicalSkills from './components/skills/technical';

function App() {
  return (
    <>
    <div className="main">
      <Navbars/>
      <HeaderSection/>
      <TechnicalSkills/>
      <Projects/>
    </div>
    </>
  )
}

export default App
