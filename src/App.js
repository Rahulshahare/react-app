import React from 'react';
import logo from './logo.svg';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './counter/counter'

function App() {
  return (
    <div className="App text-success">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React Counter App
        </h1>
        <Counter/>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
