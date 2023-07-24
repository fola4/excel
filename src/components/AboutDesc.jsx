import React from "react";

function AboutDesc({ letter, description }) {
  return (
    <div className="mx-auto grid max-w-xl grid-cols-[100px_1fr] items-center gap-3 ">
      <span className="w-28 text-9xl font-bold opacity-60">{letter}</span>
      <p>{description}</p>
    </div>
  );
}

export default AboutDesc;
