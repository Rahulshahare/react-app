import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome To LocalOlx</h1>
                <p className="lead">Showcase your product from Galli to Delhi</p>
                <hr className="my-4"/>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <Link to="/about" className="btn btn-primary btn-lg">Home</Link>
            </div>
        );
    }
    
}
