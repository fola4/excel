import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets/images';
import MobileLinks from './MobileLinks';

function Navbar() {
  const links = [
    "Home", "Our Team", "Membership", "About Us"
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='relative z-30 flex items-center justify-between px-12 py-12'>
      <Link to="/" className='text-white'>Badminton Excel</Link>

      <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-[.6]  z-[35] ${
        menuOpen ? 'translate-x-0' : 'transition translate-x-full'
      }`} />

      {/* Desktop Links */}
      <div className="space-x-12 hidden md:block">
        {links.map(link => (
          <NavbarLink name={link} key={link} />
        ))}
      </div>

      {/* Hamburger button */}
      <button
        className='bg-white h-10 w-10 md:hidden flex items-center justify-center z-50'
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <img src={!menuOpen ? menu : close} alt="menu-icon" />
      </button>

      {/* Mobile Links */}
      <MobileLinks menuOpen={menuOpen}/>
    </nav>
  );
}

export default Navbar;