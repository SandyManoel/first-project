// db.js
const { Client } = require('pg');

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

module.exports = client;