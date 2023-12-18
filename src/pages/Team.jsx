import React from "react";
import { teamMembers } from "../constants";
import TeamMember from "../components/TeamMember";
import Slideshow from "../components/Slider";
import { singleCork, wImage01, wImage02 } from "../assets/images";

function Team() {
  let images = [wImage01, wImage02, singleCork];

  return (
    <div>
      <Slideshow images={images} page={"team"} />

      {/* <!-- This is the prototype of what you said, so we can go from here --> */}
      <section className="my-5 mt-12 grid grid-cols-1 gap-12 overflow-y-hidden px-12 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            index={index}
            name={member.name}
            image={member.image}
          />
        ))}
      </section>
    </div>
  );
}

export default Team;
