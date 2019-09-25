import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

class App extends React.Component {

  handleClick = () => {
    console.log('hersfdsf');
  }

render(){
  return (
    <div className='app'>
      <NavBar/>
     <Home handleClick={this.handleClick}/>
     <Intro/>
    </div>
  );
 }
}

export default App;
