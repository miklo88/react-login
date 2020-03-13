import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav-Container">
            <h1 className='Nav-Logo'>CarPal</h1>
            <ul className='Nav-Menu'>
                <li><Link to='register'>Register</Link></li>
                <li><Link to='login'> Login</Link></li>

            </ul>
        </div>
    )
}

export default Nav;