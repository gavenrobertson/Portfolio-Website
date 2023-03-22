import React from 'react';
import '../styles/Navbar.css'


function Navbar() {
    return(
        
            <nav className='navBar'>
                <p className='websiteLogo'>GavenRobertson.dev</p>
                <ul className='navBarList'>
                    <li> <a>Contact</a> </li>
                    <li> <a>Projects</a> </li>
                    <li> <a>About</a> </li>
                    <li> <a>Home</a> </li>
                </ul>
            </nav>
        
    )
}

export default Navbar