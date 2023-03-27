import React from "react";
import "./Team.css";
import { team } from "../../data/nameData";

const Team = () => {
//   const numMembers = team.length;
  const numMembers = 5;
  const angle = 360 / numMembers;
  return (
    <div className="team-flower">
      {team.map((member, index) => (
        <div
          key={member.id}
          className="flower-petal"
          style={{
            transform: `rotate(${angle * index}deg) translateY(200px) rotate(${
              -angle * index
            }deg)`,
          }}
        >
          <img src={member.photo} alt={member.name} />
          <h3>{member.name}</h3>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
      ))}
    </div>
  );
};

export default Team;
