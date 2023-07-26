import React from "react";
import { aboutUs, features } from "../constants";
import Feature from "../components/Feature";
import AboutDesc from "../components/AboutDesc";

export default function About() {
  return (
    <div>
      <header id="about-us" className="grid">
        <div className=" absolute left-0 top-0 h-full w-full bg-black opacity-60" />

        {/* <!-- content --> */}
        <div className="relative z-20 self-center text-4xl capitalize text-white">
          <h1>We don't settle for attempts</h1>
          <h1>We ensure triumph in the world of badminton.</h1>

          <p className=" text-lg">
            BadmintonExcel champions in delivering dynamic solutions for your
            badminton development needs, empowering your sporting journey to new
            heights.
          </p>
        </div>
      </header>

      <section className="px-12 py-8">
        <h2 className="px-3 py-3 text-center text-2xl tracking-widest md:py-8">
          At badmintonExcel, we smash through barriers, delivering unmatched
          success for our clients with passion and precision.
        </h2>

        <div className="grid">
          <div className="mx-auto grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature index={index + 1} key={index} description={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-red-500 p-8">
        {aboutUs.map((about, index) => (
          <AboutDesc
            letter={about.letter}
            description={about.description}
            key={index}
          />
        ))}
      </section>
    </div>
  );
}
