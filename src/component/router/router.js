import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import HomePage from '../home/home';
import AboutPage from '../about/about';
import Page404 from '../404';
export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}></Route>
                    <Route path="/about" component={AboutPage}></Route>
                    <Route path="*" component={Page404}></Route>
                </Switch>
            </Router>
        )
    }
}