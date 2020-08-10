import React, { Component } from 'react';
import Navbar from './components/Navbar';

import './App.css';

function Declarative() {
  return (
    <article>
      <img src="./images/icon1.png" alt="declarative-icon" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
    </article>
  );
}
function Components() {
  return (
    <article>
      <img src="./images/icon1.png" alt="declarative-icon" />
      <h2>Components</h2>
      <p>RBuild encapsulated components that manage their state.</p>
    </article>
  );
}
function SingleWay() {
  return (
    <article>
      <img src="./images/icon1.png" alt="declarative-icon" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
    </article>
  );
}
function ElementJSX() {
  return (
    <article>
      <img src="./images/icon1.png" alt="declarative-icon" />
      <h2>JSX</h2>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </article>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        <div className="Features">
          <Declarative />
          <Components />
          <SingleWay />
          <ElementJSX />
        </div>
      </div>
    );
  }
}

export default App;
