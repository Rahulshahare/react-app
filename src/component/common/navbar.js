import React from 'react';
import { NavLink , } from 'react-router-dom';

function Navbar(){
    return(
        <nav class="nav">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/courses" className="nav-link" activeClassName="active">Courses</NavLink>
            <NavLink to="/something" className="nav-link" activeClassName="active">404</NavLink>
        </nav>
    )
}

export default Navbar;