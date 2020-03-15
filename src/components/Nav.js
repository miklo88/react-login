import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className='nav-container'>
      <h1 className='nav-logo'>CarPal</h1>
      <ul className='nav-menu'>
        <li>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/signup'>
            Signup
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
