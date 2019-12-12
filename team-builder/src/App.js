import React, { useState } from "react";
import Member from './components/Member';
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
  

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <Member members={members} />
    </div>
  );
}

export default App;
