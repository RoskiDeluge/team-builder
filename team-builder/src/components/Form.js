import React, { useState } from "react";

const Form = ({addNewMember}) => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    location: ""
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault(); 
    addNewMember(member);

    // clear form state of Note
    setMember({ name: "", role: "", location: "" });
  };

  return (
    <form onSubmit={submitForm}>
      
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChanges}
        value={member.name}
      />
      
      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        placeholder="What's your role?"
        onChange={handleChanges}
        value={member.role}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        placeholder="What's your location?"
        onChange={handleChanges}
        value={member.location}
      />
      <button type="submit">Add New Member</button>
    </form>

  );
};

export default Form;