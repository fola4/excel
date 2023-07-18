import React from "react";
import Navbar from "../components/Navbar";
import { aboutDescs } from "../constants";
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <div>
      <header id="about-us">
        {/* <!-- content --> */}
        <div className="home-banner-content">
          <div className="content">
            <span id="subtle-text">About us</span>
            <h1 id="large-text">Who We Are</h1>
          </div>
        </div>
      </header>

      {/* <!-- section 6 --> */}
      <div className="px-8 py-20">
        <p className="text-center text-4xl font-thin">ABOUT</p>

        <div className="grid grid-cols-1 gap-y-32">
          {aboutDescs.map((desc) => (
            <AboutSection
              key={desc.id}
              description={desc.description}
              image={desc.image}
              id={desc.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
