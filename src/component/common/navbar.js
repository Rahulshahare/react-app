import React from 'react';
import logo from '../../logo.svg';

function Navbar(){
    return(
        <nav class="nav">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/about">about</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </nav>
    )
}

export default Navbar;