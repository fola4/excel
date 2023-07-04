import React from 'react';
import { NavLink } from 'react-router-dom';


function NavbarLink({name}) {
  return (
    <NavLink 
      to={`/${name === "Home" ? "" : name.toLowerCase()}`}
      className="link font-light text-2xl mb-1 pb-1 hover:border-white duration-200 transition border-b-2 border-transparent"
    >
      {name}
    </NavLink>
  );
}

export default NavbarLink;