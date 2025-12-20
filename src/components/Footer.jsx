import React from "react";
import { pricing, socialIcons } from "../constants";
import CardPlan from "./CardPlan";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import tennisnuts from "../assets/images/tennisnuts.jpeg";

function Footer() {
  return (
    <footer className="bg-black px-12 text-white">
      <div className="mb-20 flex w-full flex-col justify-between">
        <div className="my-20 items-center justify-between text-center lg:flex">
          <span className="text-2xl font-thin text-red-600 md:text-5xl">
            MEMBERSHIP
          </span>

          <p className="text-2xl font-medium text-gray-200 md:text-6xl">
            Select the best plan
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center align-center">
          {pricing.map((feature, index) => (
            <CardPlan
              name={feature.name}
              key={index}
              description={feature.desc}
              features={feature.features}
              price={feature.price}
              adults={feature.adults}
              kids={feature.kids}
            />
          ))}
        </div>
      </div>

      {/* <!-- badminton --> */}
      <div className="flex gap-2 items-center">
        <a href="https://badmintonexcel.com">
          <img src={logo} alt="logo" className="mx-auto w-28 md:m-0" />
        </a>

        <a href="https://tennisnuts.com" target="_blank">
          <img src={tennisnuts} alt="logo" className="w-48 h-full p-0.5 bg-white" />
        </a>
      </div>

      <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-between">
        <div>
          <a href="badmintonexcel.com" id="logo" className="font-light">
            <p className="text-center text-2xl tracking-widest">
              Embrace <span className="text-red-600">Diversity</span>, Elevate
              Skills, <span className="text-red-600">Achieve</span> Fitness!
            </p>
          </a>
        </div>

        <div>
          <h4 className="mb-3 text-center text-2xl font-semibold leading-tight">
            Let's play
          </h4>
          <Link to="/membership#membership">
            <button className="whitespace-nowrap rounded-3xl border border-white px-5 py-2 text-white hover:bg-black hover:text-white">
              Register with us!
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
              link={icon.link}
            />
          ))}
        </ul>
      </div>

      <p className="py-8 text-center text-xs uppercase tracking-widest">
        &copy;BadmintonExcel. All Rights Reserved 2023.
      </p>
    </footer>
  );
}

export default Footer;
