import React from 'react'
import { Link } from 'react-router-dom';

function MobileLinks({menuOpen}) {
  const links = [
    "Home", "Our Team", "Membership", "About Us"
  ];

  return (
    <div className={`fixed h-screen md:hidden z-40 top-0 right-0 transition-transform bg-white w-2/3 ${
      menuOpen ? 'translate-x-0' : "translate-x-full"
    } grid place-items-center`}>

      <div className='grid grid-rows-4 gap-y-8 text-2xl'>
        {links.map(link => (
          <Link to={`/${link === 'Home' ? '' : link.toLowerCase()}`}>{link}</Link>
        ))}
      </div>

    </div>
  );
}

export default MobileLinks;