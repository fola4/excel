import React from "react";

function CardPlan({ name, price, description, features, kids, adults }) {
  return (
    <div
      className={`rounded-2xl border p-8 ${
        name === "Family Plan" ? "border-2 border-red-600" : "border-gray-400"
      } transition duration-150 hover:scale-105`}
    >
      <div className="flex flex-col items-center gap-y-3 sm:flex-row sm:justify-between">
        <h4 className="text-lg font-bold">{name}</h4>
        {name === "Family Plan" && (
          <p className="rounded-3xl bg-red-500 px-3 py-1 text-sm font-bold">
            Most Popular
          </p>
        )}
      </div>
      <p className="mt-4 text-sm">{description}</p>

      <div className="mt-3 flex justify-between">
        <div>
          <p className="text-2xl">{kids}</p>
          <p className="text-xs font-thin uppercase text-red-500">kids</p>
        </div>

        <div>
          <p className="text-2xl">{adults}</p>
          <p className="text-xs font-thin uppercase text-red-500">adults</p>
        </div>
      </div>
      <p className="my-3 text-center text-xs uppercase tracking-[.7rem]">
        per session
      </p>

      <a href="./membership#">
        <button
          className={`mt-3 w-full rounded-md px-3 py-2 text-sm font-bold ${
            name === "Family Plan"
              ? "bg-red-500 bg-opacity-100"
              : "bg-white bg-opacity-10"
          }`}
        >
          Join Us
        </button>
      </a>

      <ul className="mt-4 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <span className="w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <p className="text-sm">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardPlan;
