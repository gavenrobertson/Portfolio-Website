import React from 'react';
import '../styles/Navbar.css'


function Navbar() {
    return(
        <div className='divNavContainer'>
            <nav className='navBar'>
                <p className='websiteLogo'>GR</p>
                <ul className='navBarList'>
                    <li> <a>Contact</a> </li>
                    <li> <a>Projects</a> </li>
                    <li> <a>About</a> </li>
                    <li> <a>Home</a> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar