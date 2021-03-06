import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routers from './component/router/router';
import { Provider } from 'react-redux';
import store from './component/redux/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Routers/>
      </div>
    </Provider>
  );
}

export default App;
