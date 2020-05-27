import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './component/home/home';
import AbouPage from './component/about/about';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <HomePage/>
          <AbouPage/>
        </div>
      </div>
    </div>
  );
}

export default App;
