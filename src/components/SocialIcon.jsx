import React from "react";

function SocialIcon({ color, name, animation }) {
  return (
    <li>
      <a href="#" className="flex items-center text-4xl">
        <i
          className={`fa-brands fa-${name.toLowerCase()} lg:mr-2 ${animation}`}
          style={{ color: `${color}` }}
        ></i>

        <p className="hidden lg:block uppercase text-sm tracking-widest ">{name}</p>
      </a>
    </li>
  );
}

export default SocialIcon;
