import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {

 handleClick = () => {
     window.scrollTo({
         top:0,
         left:0,
         behavior: 'smooth'
     })
 }

    render() {
        return(
    <header className='navbar'>
        <nav className='navbar_navigation'>
            <div></div>
            <div className='navbar_logo'>On Tap</div>
            <div className='spacer'></div>
            <div className='navbar_navigation_items'>
                <ul>
                    <li><Link to="/" onClick={this.handleClick} className='home'>Home</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)}
}

export default NavBar;
