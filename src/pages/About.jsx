import React from "react";
import { aboutUs, features } from "../constants";
import Feature from "../components/Feature";
import AboutDesc from "../components/AboutDesc";
import { featureImage } from "../assets/images";

export default function About() {
  return (
    <div>
      <header id="about-us" className="grid">
        <div className=" absolute left-0 top-0 h-full w-full bg-black opacity-60" />

        {/* <!-- content --> */}
        <div className="relative z-20 space-y-3 self-center text-4xl capitalize text-white">
          <h1 className="md:text-6xl lg:w-2/3">We don't settle for attempts</h1>
          <h1 className="md:text-6xl lg:w-2/3">
            We ensure triumph in the world of badminton.
          </h1>

          <p className=" text-lg md:text-2xl lg:w-1/2">
            BadmintonExcel champions in delivering dynamic solutions for your
            badminton development needs, empowering your sporting journey to new
            heights.
          </p>
        </div>
      </header>

      <section className="space-y-3 px-12 py-32">
        <h2 className="text-md tracking-widest md:px-16  md:pb-8 md:text-center lg:text-2xl xl:px-80">
          We smash through barriers, delivering unmatched success for our
          clients with passion and precision.
        </h2>

        <div className="grid">
          <div className="mx-auto grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature index={index + 1} key={index} description={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative grid bg-red-500 p-8 py-28 sm:gap-y-5 lg:gap-y-12">
        <img
          src={featureImage}
          alt="image"
          className="absolute -left-1/3 w-[30rem] md:left-0"
        />
        {aboutUs.map((about, index) => (
          <AboutDesc
            name={about.name}
            letter={about.letter}
            description={about.description}
            key={index}
          />
        ))}

        <img
          src={featureImage}
          alt="image"
          className="absolute bottom-0 w-[30rem] md:right-0"
        />
      </section>
    </div>
  );
}
