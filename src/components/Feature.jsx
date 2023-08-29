import React, { useEffect, useState } from "react";
import { featureImage } from "../assets/images";

function Feature({ index, description }) {
  const [indexState, setIndexState] = useState(index);

  function even() {
    indexState % 2 === 0 ? true : false;
  }

  return (
    <div
      className={`group relative flex max-w-md flex-col gap-y-3 rounded-lg p-8 pt-16 odd:bg-red-500 even:bg-black`}
    >
      <img
        src={featureImage}
        alt="just an image"
        className="absolute right-0 top-0"
      />

      <p className={`text-8xl group-odd:text-gray-900 group-even:text-red-500`}>
        {String(index).padStart(2, "0")}
      </p>
      <p className="text-xl font-light text-white">{description}</p>
    </div>
  );
}

export default Feature;
