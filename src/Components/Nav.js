import React from 'react';
import { Link } from 'react-router-dom';

function Nav()  {

    const navStyle = {
        color:'white'
    };

    return (
        <nav className='nav'>
            <h3>NIT UK</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>ECE 4th Yr</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;