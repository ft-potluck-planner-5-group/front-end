import React from 'react';
import {Link} from 'react-router-dom'
import '../CSS/Header.css';

const Header = () => {
    const isLoggedIn = localStorage.getItem('token')
    
    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Home</Link>
                {
                    isLoggedIn ? <Link className="link" to='/potlucks'>Products</Link> : ''
                }
            </div>
            <div className="right-links">
                <Link className="link" to='/signup'>Signup</Link>
                <Link className="link" to='/login'>Login</Link>
                {
                    isLoggedIn ? <Link className="link" to='/logout'>Logout</Link> : ''
                }
                
            </div>
        </nav>
    )
}
export default Header;
