// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to User List App</h1>
          <Routes>
            <Route path="/" element={<UserList />} />
            {/* Adicione outras rotas aqui, se necessário */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;