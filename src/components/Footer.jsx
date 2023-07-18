import React from "react";
import { cardPlans, socialIcons } from "../constants";
import CardPlan from "./CardPlan";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <footer className="bg-[#fefbf8] px-12">
      <div className="mb-20 flex w-full flex-col justify-between">
        <div className="my-20 items-center justify-between lg:flex">
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
      <div className="contact">
        <div>
          <a href="#" id="logo">
            <span>Badminton Excel</span>
            <p className="card-text">
              Embrace{" "}
              <span className="text-[25px] text-red-600">Diversity</span>,
              Elevate Skills,
              <br /> <span className="text-[25px] text-red-600">
                Achieve
              </span>{" "}
              Fitness !
            </p>
          </a>
        </div>

        <div>
          <h4 className="mb-2 text-[80px] font-semibold">Let's play</h4>
          <a href="/membership">
            <button className="btn3 border-black px-2 py-3 text-black hover:bg-black hover:text-white">
              Register with us !
            </button>
          </a>
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
        &copy;Badminton Excel. All Rights Reserved 2023.
      </p>
    </footer>
  );
}

export default Footer;
