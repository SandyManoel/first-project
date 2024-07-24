// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-primary text-white" style={{ width: '250px', height: '100vh' }}>
      <div className="p-3">
        <h4>Menu</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/profile" className="text-white">Meu Perfil</Nav.Link>
          <Nav.Link as={Link} to="/settings" className="text-white">Configurações</Nav.Link>
          {/* Adicione mais links conforme necessário */}
        </Nav>
      </div>
    </nav>
  );
};

export default Sidebar;