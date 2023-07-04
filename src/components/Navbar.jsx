import React from 'react';
import NavbarLink from './NavbarLink';

function Navbar() {
  const links = [
    "Home", "Our Team", "Membership", "About Us"
  ];

  return (
    <nav className='relative z-30 flex items-center justify-between px-12 py-12'>
      <span><a href="#">Badminton Excel</a></span>

      <div className="nav-link space-x-12">
        {links.map(link => (
          <NavbarLink name={link} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;