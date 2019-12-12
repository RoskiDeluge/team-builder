import React, { useState } from "react";
import Member from './components/Member';
import Form from './components/Form';
import './App.css'; 

function App() {
  
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Roberto Delgado",
      role: "Developer",
      location: "Honolulu, HI"
    }
  ]);

  const addNewMember = member => {
    
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      location: member.location
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Member members={members} />
    </div>
  );
}

export default App;
