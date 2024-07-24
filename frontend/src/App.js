// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TeamMember from './components/TeamMember';
import Profile from './components/Profile'; // Componente para o perfil
import Settings from './components/Settings'; // Componente para configurações

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <main className="flex-fill p-3">
          <Routes>
            <Route path="/" element={<TeamPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: "João Silva", role: "Professor de Matemática" },
    { id: 2, name: "Maria Oliveira", role: "Professora de Português" },
    { id: 3, name: "Carlos Pereira", role: "Professor de Ciências" }
  ];

  return (
    <div>
      <h1>Equipe</h1>
      <div className="d-flex flex-wrap">
        {teamMembers.map(member => (
          <TeamMember key={member.id} id={member.id} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
};

export default App;