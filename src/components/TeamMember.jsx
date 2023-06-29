import React from 'react';

function TeamMember({name, image}) {
  return (
    <div className="relative">
      <p className="absolute text-white bottom-5 left-5 text-2xl ">{name}</p>
      <img src={image} alt="team-member" />
    </div>
  );
}

export default TeamMember;