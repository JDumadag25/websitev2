import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Projects from './components/Projects'

function App() {
  return (
    <div>
   <NavBar/>
   <Intro/>
   <Projects/>
   </div>
  );
}

export default App;
