import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import HomePage from '../home/home';
import AboutPage from '../about/about';

export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <Route path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
            </Router>
        )
    }
}