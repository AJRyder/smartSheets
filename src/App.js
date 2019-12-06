import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'

import * as ROUTES from './constants/routes'
import './App.css';

class App extends Component {
  state = { 
    message: '', 
    currentUser: null 
  }
  render() {
    const { currentUser } = this.state

    return (
      <div className="App">
        <NavBar />
        {
          currentUser
          ? currentUser.displayName
          : null
        }
        <h1>Hey Dude!</h1>
        <Switch>
          
        </Switch>  
      </div>
    );
}
}

export default App;
