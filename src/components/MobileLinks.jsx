import React from "react";
import { Link } from "react-router-dom";

function MobileLinks({ menuOpen, setMenuOpen }) {
  const links = ["Home", "Membership", "About Us", "Gallery"];

  return (
    <div
      className={`fixed right-0 top-0 z-40 h-screen w-2/3 bg-white transition-transform md:hidden ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } grid place-items-center bg-opacity-90`}
    >
      <div className="grid grid-rows-4 gap-y-8 text-2xl">
        {links.map((link) => (
          <Link
            key={link}
            to={`/${link === "Home" ? "" : link.toLowerCase()}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileLinks;
