import React from "react";

function SocialIcon({ color, name, animation, link }) {
  return (
    <li>
      <a
        href={`${link}`}
        className="flex items-center text-4xl"
        target="_blank"
      >
        <i
          className={`fa-brands fa-${name.toLowerCase()} lg:mr-2 ${animation}`}
          style={{ color: `${color}` }}
        ></i>

        <p className="hidden text-sm uppercase tracking-widest lg:block ">
          {name}
        </p>
      </a>
    </li>
  );
}

export default SocialIcon;
