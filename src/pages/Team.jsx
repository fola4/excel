import React from "react";
import Navbar from "../components/Navbar";
import { craig } from "../assets/images"
import { teamMembers } from "../constants";
import TeamMember from "../components/TeamMember";

function Team() {
  return (
    <div>
      <header id="team" className="relative">
        <div className="absolute top-0 left-0 h-full w-full opacity-75 bg-black"></div>
        <Navbar />
        
        {/* <!-- content --> */}
        <div className="w-full absolute grid top-0 left-0 z-20 h-full place-items-center">
          <h1 className="text-white text-[200px] ">Our Team</h1>
        </div>

      </header>

      {/* <!-- This is the prototype of what you said, so we can go from here --> */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-12 mt-12 px-12 my-5">

        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            image={member.image}
          />
        ))}
        
      </section>
    </div>
  );
}

export default Team;