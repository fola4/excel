import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import { close, menu, logo } from "../assets/images";
import MobileLinks from "./MobileLinks";

function Navbar() {
  const links = ["Home", "Our Team", "Membership", "About Us"];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-30 flex w-full items-center justify-between bg-black px-8">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28" />
      </Link>

      <div
        className={`fixed left-0 top-0 z-[35] h-screen w-full bg-black  opacity-[.6] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => setMenuOpen((prev) => !prev)}
      />

      {/* Desktop Links */}
      <div className="hidden space-x-12 md:block">
        {links.map((link) => (
          <NavbarLink name={link} key={link} />
        ))}
      </div>

      {/* Hamburger button */}
      <button
        className="z-50 flex h-10 w-10 items-center justify-center md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <img src={!menuOpen ? menu : close} alt="menu-icon" />
      </button>

      {/* Mobile Links */}
      <MobileLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}

export default Navbar;
