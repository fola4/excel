import React from "react";

function AboutDesc({ letter, description }) {
  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-3 sm:grid-cols-[100px_1fr] ">
      <span className="text-center text-9xl font-bold opacity-60 md:w-28">
        {letter}
      </span>
      <p className="text-center sm:text-left">{description}</p>
    </div>
  );
}

export default AboutDesc;
