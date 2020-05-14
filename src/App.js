import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siripong Thieanchumphan</title>
        <meta name="description" content="Frontend-lism guy" />
        <meta property="og:title" content="Siripong Thieanchumphan" />
        <meta property="og:description" content="Frontend-lism guy" />
        <meta property="og:image" content="/logo192.png" />
        <meta property="og:url" content="https://aeioyu.github.io" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="239194550846210" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
