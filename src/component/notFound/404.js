import React from 'react';
import {Link } from 'react-router-dom';

function Page404(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">its 404</h1>
                <p className="lead">The page you are looking for is not found.</p>
                <Link to="/" className="btn btn-primary btn-lg">Home</Link>
            </div>
        </div>
    )
}
export default Page404;