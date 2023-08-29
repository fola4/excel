import React from "react";

function AboutDesc({ name, letter, description }) {
  return (
    <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-x-12 sm:grid-cols-[100px_1fr] lg:grid-cols-[100px_2fr]">
      <span className="text-center text-[10rem] font-bold opacity-60 md:w-28">
        {letter}
      </span>
      <div className=" space-y-3">
        <p className="text-center text-3xl font-semibold text-white sm:text-left lg:text-4xl">
          {name}
        </p>
        <p className="text-center text-xl text-white sm:text-left md:font-light lg:text-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AboutDesc;
