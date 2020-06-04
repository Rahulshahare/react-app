import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import HomePage from '../home/home';
import AboutPage from '../about/about';
import CoursePage from '../courses/courses';
import User from '../users/user';
import Counter from '../../counter/counter';
import Page404 from '../notFound/404';
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
                                <Route path="/courses" render={() => <CoursePage/>}></Route>
                                <Route path="/user" component={User}></Route>
                                <Route path="/counter" component={Counter}></Route>
                                <Route path="*" component={Page404}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}