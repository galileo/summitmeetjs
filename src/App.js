import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meetjs.pl React Application</h2>
        </div>
        <p className="App-intro">
          Hello Gdańsk! Good morning all! <code>How are you?</code>.
        </p>
      </div>
    );
  }
}

export default App;
