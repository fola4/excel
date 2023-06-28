import React from 'react';

function Navbar() {
  return (
    <nav>
      <span><a href="#">Badminton Excel</a></span>

      <div className="nav-link">
        <a href="./index.html" className="nav-link-title">Home</a>
        <a href="./team.html" className="nav-link-title">Our team</a>
        <a href="./membership.html" className="nav-link-title">Membership</a>
        <a href="./about.html" className="nav-link-title">About Us</a>
      </div>
    </nav>
  );
}

export default Navbar;