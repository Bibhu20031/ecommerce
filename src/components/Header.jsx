import React from 'react'
import { NavLink,Link } from 'react-router-dom';
// import Logo from '../Logo.png';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.css';
import User from '../pages/User';

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <NavLink to='/' className="nav-link active" aria-current="page" >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='About' className="nav-link" >
           About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='Products' className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='Cart' className="nav-link">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='Registration' className="nav-link">
            Registration
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='User' className="nav-link">
            <User/>
          </NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header;