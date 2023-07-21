import React from "react";
import { cardPlans, socialIcons } from "../constants";
import CardPlan from "./CardPlan";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#fefbf8] px-12">
      <div className="mb-20 flex w-full flex-col justify-between">
        <div className="my-20 items-center justify-between text-center lg:flex">
          <span className="text-2xl text-red-600 md:text-5xl">MEMBERSHIP</span>

          <p className="text-2xl font-medium text-black md:text-7xl">
            Select the best plan
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 self-center lg:grid-cols-3">
          {cardPlans.map((plan) => (
            <CardPlan
              name={plan.name}
              price={plan.price}
              description={plan.description}
              key={plan.name}
            />
          ))}
        </div>
      </div>

      {/* <!-- badminton --> */}
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div>
          <a href="#" id="logo" className="font-light">
            <span>BadmintonExcel</span>
            <p className="text-2xl tracking-widest">
              Embrace <span className="text-red-600">Diversity</span>, Elevate
              Skills, <span className="text-red-600">Achieve</span> Fitness !
            </p>
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-center text-2xl font-semibold leading-tight">
            Let's play
          </h4>
          <Link to="/membership#membership">
            <button className="btn3 whitespace-nowrap border-black px-2 py-3 text-black hover:bg-black hover:text-white">
              Register with us !
            </button>
          </Link>
        </div>
      </div>

      <div>
        <ul className="my-8 flex justify-between">
          {socialIcons.map((icon) => (
            <SocialIcon
              animation={icon.animation}
              color={icon.color}
              name={icon.name}
              key={icon.name}
            />
          ))}
        </ul>
      </div>

      <p className="my-8 text-center text-sm uppercase tracking-widest">
        &copy;BadmintonExcel. All Rights Reserved 2023.
      </p>
    </footer>
  );
}

export default Footer;
