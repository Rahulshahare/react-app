import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import HomePage from '../home/home';
import AboutPage from '../about/about';
import Page404 from '../404';
import Navbar from '../common/navbar';
export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <div className="container-fluid">
                    <Navbar/>
                    <div className="row">
                        <div className="col-12">
                                <Switch>
                                    <Route exact={true} path="/" component={HomePage}></Route>
                                    <Route path="/about" component={AboutPage}></Route>
                                    <Route path="*" component={Page404}></Route>
                                </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}