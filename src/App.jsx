import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="Header-text">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become an
              Ninka Developer.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awesome!
            </a>
          </div>
        </header>
        <Features />
      </div>
    );
  }
}

export default App;
