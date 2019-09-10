import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const NavBar = props => (
    <header className='navbar'>
        <nav className='navbar_navigation'>
            <div></div>
            <div className='navbar_logo'>ON TAP</div>
            <div className='spacer'></div>
            <div className='navbar_navigation_items'>
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Home</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavBar;
