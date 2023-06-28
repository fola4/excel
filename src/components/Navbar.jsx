import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='relative z-30'>
      <span><a href="#">Badminton Excel</a></span>

      <div className="nav-link">
        <NavLink to="/" className="nav-link-title">Home</NavLink>
        <NavLink to="/team" className="nav-link-title">Our team</NavLink>
        <NavLink to="/membership" className="nav-link-title">Membership</NavLink>
        <NavLink to="/about" className="nav-link-title">About Us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;