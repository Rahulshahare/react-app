import React from 'react';
import { Link } from 'react-router-dom';
import CreateCoursePage from '../courses/createCourse';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome To LocalOlx</h1>
                <p className="lead">Showcase your product from Galli to Delhi</p>
                <hr className="my-4"/>
                <p>Here Testing Redux. data can flow through app.below component have a data</p>
                <Link to="/about" className="btn btn-primary btn-lg">Home</Link>
            </div>
            <CreateCoursePage/>
            </div>
        );
    }
    
}
