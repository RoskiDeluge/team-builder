import React from "react";

const Members = ({members}) => {
  return (
    <div className="members-list">
      {members.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;