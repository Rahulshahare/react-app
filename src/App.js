import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routers from './component/router/router';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Routers/>
        </div>
      </div>
    </div>
  );
}

export default App;
