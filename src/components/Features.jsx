import React from 'react';

import './Features.css';

function Features() {
  return (
    <div className="Features">
      <article>
        <img src="./images/icon1.png" alt="declarative-icon" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </article>
      <article>
        <img src="./images/icon2.png" alt="components-icon" />
        <h2>Components</h2>
        <p>RBuild encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src="./images/icon3.png" alt="singleway-icon" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </article>
      <article>
        <img src="./images/icon4.png" alt="jsx-icon" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </div>
  );
}

export default Features;
