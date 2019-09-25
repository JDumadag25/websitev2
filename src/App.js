import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  handleClick = () => {
    console.log('hersfdsf');
  }

render(){
  return (
    <div className='app'>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
            <Route exact path='/' component={Home}/>
              <Route exact path='/' component={Home}/>

        </Switch>
      </Router>

      <Home/>

    </div>
  );
 }
}

export default App;
