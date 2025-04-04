const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ message: 'Usuário não encontrado' });
    res.json(results[0]);
  });
});

app.post('/users', (req, res) => {
  const { name, email, phone, role } = req.body;
  db.query(
    'INSERT INTO users (name, email, phone, role) VALUES (?, ?, ?, ?)',
    [name, email, phone, role],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, name, email, phone, role });
    }
  );
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, phone, role } = req.body;

  db.query(
    'UPDATE users SET name = ?, email = ?, phone = ?, role = ? WHERE id = ?',
    [name, email, phone, role, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
});

app.listen(5000, () => console.log('API rodando na porta 5000'));
