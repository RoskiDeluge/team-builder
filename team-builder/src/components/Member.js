import React from "react";

const Members = props => {
  return (
    <div className="members-list">
      {props.members.map(member => (
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