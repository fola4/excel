import React from "react";
import { features } from "../constants";
import Feature from "../components/Feature";

export default function About() {
  return (
    <div>
      <header id="about-us" className="grid">
        <div className=" absolute left-0 top-0 h-full w-full bg-black opacity-75"></div>

        {/* <!-- content --> */}
        <div className="relative z-20 self-center text-4xl capitalize text-white">
          <h1>We don't strive</h1>
          <h1>We Deliver Client's success</h1>

          <p className=" text-lg">
            Halkwinds specializes in delivering real time business solution for
            your custom software development needs.
          </p>
        </div>
      </header>

      <section className="px-12 py-8">
        <h2 className="px-3 py-3 text-center text-2xl tracking-widest md:py-8">
          BadmintonExcel doesn't just strive for client's success, but delivers
          it.
        </h2>

        <div className="grid">
          <div className="mx-auto grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature index={index + 1} key={index} description={feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
