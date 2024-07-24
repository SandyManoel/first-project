// backend/server.js

const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Permitir requisições de qualquer origem

// Configuração da conexão com o PostgreSQL
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'FirstTG',
  password: 'fatec123',
  port: 5432, // Porta padrão do PostgreSQL
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Rota exemplo
app.get('/api/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});