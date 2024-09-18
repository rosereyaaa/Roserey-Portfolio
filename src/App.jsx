import React from 'react';
import './App.css'

// Initialization of pages 
import Navbars from './components/navigation/navbar'
import HeaderSection from './components/aboutMe/header';

function App() {
  return (
    <>
    <div className="main">
      <Navbars/>
      <HeaderSection/>
    </div>
    </>
  )
}

export default App
