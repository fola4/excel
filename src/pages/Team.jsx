import React from "react";
import Navbar from "../components/Navbar";
import { teamMembers } from "../constants";
import TeamMember from "../components/TeamMember";

function Team() {
  return (
    <div>
      <header id="team" className="relative">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-75"></div>

        {/* <!-- content --> */}
        <div className="absolute left-0 top-0 z-20 grid h-full w-full place-items-center">
          <h1 className="text-2xl text-white md:text-8xl">Our Team</h1>
        </div>
      </header>

      {/* <!-- This is the prototype of what you said, so we can go from here --> */}
      <section className="my-5 mt-12 grid grid-cols-1 grid-rows-2 gap-12 px-12 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} image={member.image} />
        ))}
      </section>
    </div>
  );
}

export default Team;
