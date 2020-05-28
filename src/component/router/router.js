import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import HomePage from '../home/home';
import AboutPage from '../about/about';
//import CoursePage from '../courses/courses';
import Page404 from '../notFound/404';
import Navbar from '../common/navbar';
const CoursePage = React.lazy(() => import('../courses/courses'));

export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <div className="container-fluid">
                    <Navbar/>
                    <div className="row">
                        <div className="col-12">
                            <Switch>
                                <Route exact={true} path="/" component={HomePage}></Route>
                                <Route path="/about" component={AboutPage}></Route>
                                <Route path="/courses" render={() => <CoursePage/>}></Route>
                                <Route path="*" component={Page404}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                </Suspense>
            </Router>
        )
    }
}