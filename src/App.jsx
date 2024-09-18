import React from 'react';
import './App.css'

// Initialization of pages 
import Navbars from './components/navigation/navbar'
import HeaderSection from './components/aboutMe/header';
import Projects from './components/projects/projectSection';

function App() {
  return (
    <>
    <div className="main">
      <Navbars/>
      <HeaderSection/>
      <Projects/>
    </div>
    </>
  )
}

export default App
